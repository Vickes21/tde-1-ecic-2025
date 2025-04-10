# VV - API de Gerenciamento de Produtos (Backend)

API RESTful para suporte ao sistema de gerenciamento de produtos.

## 🚀 Funcionalidades

- Endpoints para CRUD de produtos
- Validação de dados

## 🛠️ Stack Tecnológica

- **Runtime**: Node.js
- **Framework**: Express
- **Banco de Dados**: MySQL/PostgreSQL
- **ORM**: Drizzle ORM
- **Validação**: Zod

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── config/          # Configurações da aplicação
│   ├── controllers/     # Controladores da API
│   ├── db/              # Configuração e modelos do banco de dados
│   ├── middlewares/     # Middlewares do Express
│   ├── routes/          # Rotas da API
│   ├── services/        # Lógica de negócios
│   ├── utils/           # Funções utilitárias
│   └── app.js           # Configuração do Express
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json         # Dependências e scripts
└── README.md            # Documentação
```

## 🚦 Como Iniciar

### Pré-requisitos

- Node.js (v20+)
- npm ou yarn
- MySQL ou PostgreSQL

### Instalação

1. Clone o repositório
   ```bash
   git clone git@github.com:vv/backend.git
   cd vv/backend
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as variáveis de ambiente
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

4. Execute as migrações do banco de dados
   ```bash
   npm run db:migrate
   # ou
   yarn db:migrate
   ```

5. Inicie o servidor de desenvolvimento
   ```bash
   npm run start
   # ou
   yarn start
   ```

6. A API estará disponível em `http://localhost:3000`

## 📡 Endpoints da API

- `GET /api/products` - Lista todos os produtos
- `GET /api/products/:id` - Obtém detalhes de um produto específico
- `POST /api/products` - Cria um novo produto
- `PUT /api/products/:id` - Atualiza um produto existente
- `DELETE /api/products/:id` - Remove um produto

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` - Compila o código para produção
- `npm start` - Inicia o servidor em modo de produção
- `npm run db:migrate` - Executa as migrações do banco de dados

## 📝 Estilo de Código e Convenções

- Seguimos o padrão de código do Airbnb
- Utilizamos ESLint e Prettier para formatação consistente
- Adotamos o padrão de arquitetura MVC (Model-View-Controller)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
