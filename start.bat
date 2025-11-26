@echo off
echo Iniciando projeto...

REM Inicia o banco de dados (executando o DBinit.bat)
start "Iniciando Banco de Dados" cmd /k "cd /d %~dp0backend && call DBinit.bat && exit"

REM Inicia o backend (pasta backend)
start "Backend" cmd /k "cd /d %~dp0backend && npm install && node app.js"

REM Inicia o frontend (pasta projetin_top)
start "Frontend" cmd /k "cd /d %~dp0projetin_top && npm install && npm run dev"

exit