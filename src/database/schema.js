/**
 * AgroSphere OS - Relational Database Schema Definitions
 * Architecture Layer: Database
 */

export const DATABASE_DDL = `
CREATE TABLE IF NOT EXISTS farms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    total_hectares NUMERIC(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS field_sectors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id UUID NOT NULL REFERENCES farms(id),
    name VARCHAR(100) NOT NULL,
    crop_type VARCHAR(100) NOT NULL,
    area_hectares NUMERIC(8, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_code VARCHAR(100) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    actor_id VARCHAR(150) NOT NULL,
    action VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    details JSONB NOT NULL,
    record_hash VARCHAR(64) NOT NULL
);
`;
