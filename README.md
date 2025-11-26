# Interface Loja

Este projeto tem como objetivo criar uma loja online com funcionalidades de backend e frontend. Este README irá te guiar pelo processo de instalação, execução e contribuição para o projeto.

## **1. Clonando o Repositório**

Para começar, você precisa clonar o repositório do projeto em seu computador. Para isso, siga os seguintes passos:

### **1.1. Abra o VSCode no Windows**

No seu computador, abra o terminal integrado do VSCode. Para isso, siga esses passos:
1. Abra o VSCode na pasta **\Downloads**
2. Pressione `ctrl + shift + " ` para abrir o terminal


### **1.2. Definindo a Política de Execução no PowerShell (Windows)**

Antes de executar qualquer script no VSCode, você precisa garantir que o VSCode permita scripts não assinados (como o `start.bat` e `run.bat`) sendo executados. Execute o seguinte comando no VSCode:

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### **1.3. Clonando o Repositório**

Agora, clone o repositório do projeto para o seu computador. Para envitar problemas clone o projeto na pasta **\Downloads**
Execute o seguinte comando no terminal do VSCode:

```
git clone https://github.com/davilima-br/interface_loja
```

Isso criará uma pasta chamada `interface_loja` no seu computador com todos os arquivos do projeto.

## **2. Iniciando o Projeto**

Depois de clonar o repositório, você precisa iniciar tanto o **backend** quanto o **frontend**. A maneira mais fácil de iniciar todo o projeto é executar o script `start.bat`, que inicializa todas as partes do projeto.

### **2.1. Abrindo o VSCode na Pasta do Projeto**

Ainda no mesmo terminal rode o seguinte comando para abrir a pasta do projeto:

```
cd interface_loja
```

### **2.2. Executando o Script `start.bat`**

Para iniciar o projeto, execute o script `start.bat` diretamente do terminal do VSCode.

```
./start.bat
```

O script **`start.bat`** vai iniciar:

* O **backend** (com Node.js).
* O **frontend** (com o Next.js).
* E também o **banco de dados**, rodando os comandos para garantir que a estrutura do banco de dados esteja pronta.

### **2.3. O que o Script `start.bat` faz:**

* **Inicia o Banco de Dados:** Roda o script `DBinit.bat`, que cria e configura o banco de dados PostgreSQL.
* **Inicia o Backend:** Inicia o servidor Node.js, executando o `npm install` para garantir que todas as dependências sejam instaladas e depois rodando o `node app.js` para iniciar a aplicação.
* **Inicia o Frontend:** Inicia o frontend rodando os comandos `npm install` e `npm run dev`.

O **backend** e **frontend** serão executados em janelas separadas do terminal, para que você possa ver os logs de cada parte do projeto.

## **3. Problemas Comuns**

### **3.1. Problema: O banco de dados não é criado corretamente**

1. Se o banco de dados não for criado automaticamente ao rodar o `DBinit.bat`, verifique se o PostgreSQL está corretamente instalado e acessível no seu sistema. Você pode verificar isso rodando `psql --version` no terminal.

2. Você pode verificar manualmente abrindo `C:\Program Files\PostgreSQL\`. **Esse projeto foi feito com o PostgreSQL 15**, caso você tenha instalado no seu computador outra versão vá em `\interface_loja\backend\DBinit.bat` e edite a 25° linha para o caminho exato onde o executavel do PostgreSQL está instalado.

3. Se o comando `psql --version` estiver funcionando normalmente você pode substituir o `"C:\Program Files\PostgreSQL\15\bin\psql.exe"` por `psql`

## **4. Atualizando o Projeto com Mudanças de Outros Colaboradores**

Para obter as últimas atualizações do projeto feitas por outros desenvolvedores, basta rodar o comando `git pull` na pasta do repositório:

### **4.1. Baixando as Mudanças do Repositório**

Execute o seguinte comando no terminal do VSCode (ou no terminal normal) para obter as mudanças mais recentes do repositório:

```
git pull
```

### **4.2. Resolvendo Conflitos (se necessário)**

Caso haja conflitos durante o `git pull`, o Git pedirá que você resolva as diferenças nos arquivos. Após resolver, basta fazer um commit para finalizar o merge.

## **5. Enviando suas Mudanças para o GitHub**

Depois de fazer alterações no código, adicionar funcionalidades ou corrigir bugs, você precisará enviar suas mudanças para o repositório remoto no GitHub.

### **5.1. Rodando o Script `run.bat`**

O script `run.bat` vai rodar todos os comandos git's necessários para subir o projeto no Github. Para isso:
- Edite o: `git commit -m "COLOQUE A DESCRICAO AQUI"` e descreva as atualizações feitas no projeto
1. Abra o terminal do VSCode e navegue até o diretório do projeto (`interface_loja`).
2. Depois execute o seguinte:
```
.\run.bat
```

### **5.2. Detalhamento: Fazendo o Commit das Suas Mudanças**

Primeiro, você precisa fazer o **commit** das suas mudanças. Para isso, siga esses passos:

1. Abra o terminal do VSCode e navegue até o diretório do projeto (`interface_loja`).
2. Execute o seguinte comando para adicionar as alterações que você fez:

```
git add .
```

3. Agora, faça o commit das suas alterações com uma mensagem que descreva o que você fez:

```
git commit -m "Descrição da sua mudança"
```

### **5.3. Enviando as Mudanças para o GitHub**

Depois de fazer o commit, envie suas mudanças para o GitHub com o comando `git push`:

```
git push origin main
```

Isso enviará as suas alterações para o repositório remoto no GitHub na branch `main`.


### **5.4. Dicas:**

* **git pull** sempre antes de começar a trabalhar para pegar as mudanças mais recentes.
* **git push** sempre após finalizar suas alterações para enviar ao repositório remoto.