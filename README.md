# Instruções para rodar o projeto:
## 1. Rode no VSCode:
Isso vai permitir executar alguns comandos nos computadores do IF e vai baixar o repositorio

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
git clone https://github.com/davilima-br/interface_loja
```

## 2. Rode isso para iniciar o projeto todo:
Abra o VSCode na pasta "Interface_loja" e cole no terminal:

```
./start.bat
```

## 3. Para baixar as mudanças feitas pelos outros:
```
git pull
```

## 4. Para mandar as mudanças que você fez para o GitHub:
* Primeiro vá no arquivo "run.bat" e descreva sua mudança em `git commit -m "mudança"`
* Depois rode no terminal
```
./run.bat
```