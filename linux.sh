#!/bin/bash
echo "Iniciando projeto..."

# Caminho da pasta onde o script está
BASE_DIR="$(cd "$(dirname "$0")" && pwd)"

# Concede permissão de execução para o script DBinit.sh
chmod +x "$BASE_DIR/backend/DBinit.sh"

# Inicia o script DBinit.sh em um novo terminal
gnome-terminal -- bash -c "
    cd \"$BASE_DIR/backend\" &&
    ./DBinit.sh &&  # Executa o script DBinit.sh
    exit 0
"

# Inicia o backend em um novo terminal
gnome-terminal -- bash -c "
    cd \"$BASE_DIR/backend\" &&
    npm install &&
    node app.js;
    exec bash
"

# Inicia o frontend em outro terminal
gnome-terminal -- bash -c "
    cd \"$BASE_DIR/projetin_top\" &&
    npm i &&
    npm run dev;
    exec bash
"