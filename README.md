# WK Technology - Juliano Ramos

Este projeto foi implementado como teste para ingresso na empresa WK Technology.

<br />
## Pré-requisitos

Para o correto funcionamento do projeto é necessário ter instalado no ambiente o **.NET 7.0**, o **NodeJs** e o **MySQL**.

```bash
  https://dotnet.microsoft.com/pt-br/download/dotnet/7.0
  https://nodejs.org/en/download
```

<br /><br />

## Clonando o projeto

```bash
  git clone https://github.com/julianoramosf/wktech.git
```

<br /><br />

## Rodando localmente o Backend

<br />
Após fazer o clone do projeto, entre no diretório do projeto

```bash
  cd wktech
```

Restaure as dependências e faça o build da aplicação

```bash
  dotnet restore
  dotnet build
```

Altere a string de conexão com o MySql no arquivo **appsettings.json** no diretório **WKTech.API**

```bash
  "DefaultConnection": "Server=[SERVER];User Id=[USER];Password=[PASSWORD];Database=[DATABASE]"
```

Caso não tenha o Entity Framework instalado, execute o seguinte comando:
```bash
dotnet tool install --global dotnet-ef
```

Rode o EF Migration para inicializar o banco de dados

```bash
  cd ./WKTech.API
  dotnet ef database update
```



Inicialize a aplicação:

```bash
  dotnet run --project ./WKTech.API/WKTech.API.csproj
```

<br /><br />

## Rodando localmente o Frontend

Entre no diretório do frontend

```bash
  cd wktech/Frontend/      
```

Restaure as dependências da aplicação (um dos dois comandos abaixo)

```bash
  yarn install
  npm install
```

Inicialize a aplicação:

```bash
  yarn dev
  npm run dev
```


Por padrão o VITE inicializa a aplicação no endereço [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

```bash
  Abra o navegador no endereço: http://127.0.0.1:5173/
```
<br /><br />
## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  dotnet test
```
<br /><br />
## Documentação

Com o projeto rodando:

[http://localhost:8181/swagger/index.html](http://localhost:8181/swagger/index.html)
