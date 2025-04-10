# VV - Sistema de Gerenciamento de Produtos

Um sistema completo para gerenciamento de produtos com frontend em React e backend em Node.js.

## 📋 Visão Geral

Este projeto é uma aplicação full-stack dividida em dois componentes principais:

- **Frontend**: Interface de usuário construída com React, Vite, Tailwind CSS
- **Backend**: API RESTful construída com Node.js

## 🏗️ Estrutura do Projeto

O projeto está organizado em duas pastas principais:

```
vv/
├── frontend/           # Aplicação React (cliente)
├── backend/            # Aplicação Node.js (servidor)
├── docker-compose.yml  # Configuração Docker para desenvolvimento
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🚀 Como Executar o Projeto Completo
É possível servir o banco de dados MySQL/PostgreSQL com Docker ou se já tiver um banco rodando em sua máquina, basta alterar as variáveis de ambiente no arquivo backend/.env 

### Usando Docker (Apenas banco de dados)

1. Certifique-se de ter o Docker e Docker Compose instalados
2. Na raiz do projeto, execute:
   ```bash
   docker-compose up -d
   ```
3. Acesse o frontend em `http://localhost:5173`
4. A API estará disponível em `http://localhost:3000`

### Executando Localmente

1. Siga as instruções de instalação e execução no README de cada subprojeto:
   - [Frontend](./frontend/README.md)
   - [Backend](./backend/README.md)

## 🔧 Tecnologias Utilizadas

### Frontend
- React com Vite
- React Router
- Tailwind CSS
- TanStack Query (React Query)
- React Hook Form com Zod

### Backend
- Node.js
- Express
- Banco de dados (MySQL/PostgreSQL)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
