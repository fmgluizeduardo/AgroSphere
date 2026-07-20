# AgroSphere OS - Arquitetura e Modelo de Banco de Dados

## 1. Visão Geral

O banco de dados do **AgroSphere OS** é estruturado para garantir alta concorrência em gravações telemétricas de sensores IoT, auditoria à prova de adulteração e consultas rápidas de métricas agrícolas.

---

## 2. Esquema Relacional de Tabelas (DDL)

```sql
-- Habilitação de extensões essenciais para AgroSphere OS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- 1. Tabela de Propriedades / Fazendas
CREATE TABLE farms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    total_hectares NUMERIC(10, 2) NOT NULL,
    location GEOMETRY(Point, 4326),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabela de Zonas de Plantio / Talhões
CREATE TABLE field_sectors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id UUID NOT NULL REFERENCES farms(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    crop_type VARCHAR(100) NOT NULL,
    area_hectares NUMERIC(8, 2) NOT NULL,
    polygon_boundary GEOMETRY(Polygon, 4326),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabela de Dispositivos e Sensores IoT
CREATE TABLE iot_devices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sector_id UUID REFERENCES field_sectors(id) ON DELETE SET NULL,
    device_serial VARCHAR(100) UNIQUE NOT NULL,
    device_type VARCHAR(50) NOT NULL, -- e.g. 'MOISTURE', 'WEATHER_STATION'
    status VARCHAR(20) DEFAULT 'ACTIVE',
    last_ping TIMESTAMP WITH TIME ZONE
);

-- 4. Tabela de Telemetria (Particionada por mês)
CREATE TABLE telemetry_readings (
    id BIGSERIAL,
    device_id UUID NOT NULL REFERENCES iot_devices(id),
    recorded_at TIMESTAMP WITH TIME ZONE NOT NULL,
    metric_name VARCHAR(50) NOT NULL,
    metric_value NUMERIC(12, 4) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    PRIMARY KEY (id, recorded_at)
) PARTITION BY RANGE (recorded_at);

-- 5. Tabela de Trilha de Auditoria do AgroSphere OS (Audit Logs Imutável)
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_code VARCHAR(100) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    actor_id VARCHAR(150) NOT NULL,
    actor_ip VARCHAR(45),
    action VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'SYSTEM', 'PWA', 'DB', 'USER', 'AUDIT'
    details JSONB NOT NULL,
    previous_hash VARCHAR(64),
    record_hash VARCHAR(64) NOT NULL
);

-- Índice para busca performática de auditoria por ator e categoria
CREATE INDEX idx_audit_actor_category ON audit_logs(actor_id, category);
CREATE INDEX idx_audit_timestamp ON audit_logs(timestamp DESC);
```

---

## 3. Garantia de Imutabilidade da Auditoria

1. **Restrição de UPDATE e DELETE**: Triggers configurados no PostgreSQL para rejeitar qualquer instrução de alteração ou exclusão em `audit_logs`.
2. **Encadeamento Hash SHA-256**: Cada novo registro calcula `record_hash` derivado do conteúdo da linha e do `record_hash` anterior (`previous_hash`).
