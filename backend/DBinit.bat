@echo off
REM Definir variáveis de conexão
set PGHOST=localhost
set PGPORT=5432
set PGUSER=postgres
set PGPASSWORD=postgres
set PGDATABASE=postgres 

REM Obter o diretório onde o script .bat está localizado
pushd %~dp0

REM Definir o caminho do arquivo SQL
set SQL_FILE=%USERPROFILE%\Downloads\interface_loja\backend\SQL\BancoCompleto.sql

REM Comando para criar o banco de dados 'DB_loja' se não existir
"C:\Program Files\PostgreSQL\15\bin\psql.exe" -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -c "SELECT 1 FROM pg_database WHERE datname = 'DB_loja';" | findstr /i "1" >nul
if %errorlevel% neq 0 (
    echo Criando o banco de dados DB_loja...
    "C:\Program Files\PostgreSQL\15\bin\psql.exe" -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -c "CREATE DATABASE DB_loja;"
) else (
    echo O banco de dados DB_loja já existe.
    pause
)

REM Comando para rodar o script SQL no banco DB_loja
"C:\Program Files\PostgreSQL\15\bin\psql.exe" -h %PGHOST% -p %PGPORT% -U %PGUSER% -d db_loja -f "%SQL_FILE%"

REM Voltar para o diretório original
popd

pause