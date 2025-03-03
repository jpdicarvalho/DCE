# DCE

## Como Rodar o Projeto Localmente?

Antes de começar, **verifique se sua máquina possui os seguintes pré-requisitos instalados:**  

 - **[Docker](https://www.docker.com/get-started/)**  
 - **[Docker Compose](https://docs.docker.com/compose/install/)**  

**Para usuários Windows:**  
É recomendado instalar o **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**, pois ele facilita a gestão dos containers.  

## Com a etapa anterior concluída, siga os seguintes passos:   
### **1️. Clonar o Repositório**  
Abra um terminal e execute:  
  ```sh
  git clone https://github.com/seu-usuario/dce-clarke.git
  ````
Em seguida, acesse o diretório que contém o projeto  
  ````sh
  cd DCE
  ````
Agora, dentro da pasta do projeto, execute:
  ````sh
  docker-compose up --build
  ````
Isso irá basicamente:
  1. Criar e iniciar o banco de dados MySQL no Docker
  2. Rodar as migrations do Prisma para criar as tabelas
  3. Popular o banco de dados com informações de teste
  4. Iniciar o backend (API GraphQL)
  5. Iniciar o frontend (React + Vite)

Depois, para acessar a aplicação, use:
  ````sh
   http://localhost:5173
  ````
Caso queira acessar apenas a API GraphQL, use:
  ````sh
   http://localhost:4000
  ````
## Comandos Úteis parar gerenciar os containers:
Parar os containers:
  ````sh
   docker-compose down
  ````
Remover containers, imagens e volumes:
  ````sh
   docker-compose down
  ````
