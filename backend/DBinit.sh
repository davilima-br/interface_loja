#!/bin/bash

# === Variáveis de conexão ===
export PGHOST="localhost"
export PGPORT="5432"
export PGUSER="postgres"
export PGPASSWORD="postgres"
export PGDATABASE="postgres"
export TARGET_DB="db_loja"

# === Diretório onde o script está ===
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# === Caminho do arquivo SQL ===
SQL_FILE="$SCRIPT_DIR/SQL/BancoCompleto.sql"

# === Verificar se o banco DB_loja existe ===
DB_EXISTS=$(psql -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" -tAc \
  "SELECT 1 FROM pg_database WHERE datname = '$TARGET_DB';")

if [[ "$DB_EXISTS" == "1" ]]; then
  echo "O banco de dados '$TARGET_DB' já existe."
  exit 0
fi

echo "Criando o banco de dados DB_loja..."
psql -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$PGDATABASE" \
    -c "CREATE DATABASE $TARGET_DB;"

# === Rodar o script SQL ===
echo "Executando script SQL..."
psql -h "$PGHOST" -p "$PGPORT" -U "$PGUSER" -d "$TARGET_DB" -f "$SQL_FILE"

echo "Concluído."
exit 0