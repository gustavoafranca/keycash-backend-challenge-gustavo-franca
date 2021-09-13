

## Usar NPM

- Run `npm i` para instalar as dependências do projeto

## Usar Yarn

- Run `yarn` para instalar as dependências do projeto


## Banco de Dados
Neste projeto utilizei o Docker compose para criar um container no MySQL.

Utilizando o Docker Compose
- Run `docker-compose up -d`

Não utilizar o Docker Compose
- Alterar a configuração do ormconfig.json 

```
{
    "host": "instancia do banco de dados", #Exp: 127.0.0.1 | localhost 
    "port": porta de acesso,               #Exp: 3306
    "username": "Usuário",
    "password": "Senha",
    "database": "nome do banco",
}

```

### Rodar a migration para criar as tabelas

- Run `yarn run typeorm migration:run`


## Iniciar o Projeto
- Run `yarn start`


## Iniciar a Documentação com Swagger
- Run `http://localhost:3333/api-docs` 


### Estrutura do projeto

A base do código do projeto está localizada principalmente na pasta `src`. Esta pasta está dividida em:

- `controller` - contendo base código compartilhada para os endpoints 
- `database` - contendo as migrations das tabela e a conexão do banco de dados MySQL
- `models` - contendo os Schema das tabelas do banco
- `routes` - contendo as rotas dos endpoints
- `views` - contendo as visualização de retornos das APIS

```
.
├── src
│   ├── controller                              
|   |   ├── ImoveisController.ts                # `imoveis` código do Crud
│   │   └── TipoController.ts                   # `tipo` código do Crud
|   |
|   ├── database
│   │   ├── migrations                          
│   │   |   └── 1631401332253-CreateTable.ts    # `migrations` Arquivo gerado pela migração do Typorm
│   │   └── connection.ts                       # `database` Responsavel por fazer a conexão com o banco de dados
│   │
│   ├── models                                  
│   |   ├── Imovel.ts                           # Modelo de schema da tabela de imoveis
│   |   └── Tipo.ts                             # Modelo de schema da tabela de tipo
│   │
│   ├── routes                                 
│   |   ├── imoveis.routes.ts                   # Rotas para os endpoints de imóveis
│   |   ├── index.ts                            # Importações das rotads do endpoints
│   |   └── tipo.routes.ts                      # Rotas para os endpoints de tipo
│   │
│   ├── views                                  
│   |   ├── ImoveisView.ts                     # Monta a visualização das resposta de imóveis
│   |   └── TipoViews.ts                       # Monta a visualização das resposta de tipo
│   |
|   └── server.ts                              # Arquivo de configuração do servidor com express
|
├── package.json
├── docker-compose.yaml         # Container para o banco de dados
├── tsconfig.json               
├── ormconfig.json              # Arquivo de configuração do banco de dados, migrações, entidades e cli do typeorm      
├── swagger.json                # Arquivo responsavel pela documentação das API (Swagger)         
└── bash.sh                     # Contem os comandos para realização do funcionamento do projeto           
```