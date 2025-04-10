# VV - Aplicação de Gerenciamento de Produtos (Frontend)

Uma aplicação web moderna para listagem e gerenciamento de produtos construída com React.

## 🚀 Funcionalidades

- Listagem de produtos com paginação
- Visualização detalhada de produtos
- Interface amigável com design responsivo
- Página sobre o autor
- Interface moderna com Tailwind CSS

## 🛠️ Stack Tecnológica

- **Frontend**: React com Vite
- **Roteamento**: React Router
- **Estilização**: Tailwind CSS
- **Requisições de Dados**: TanStack Query (React Query)
- **Manipulação de Formulários**: React Hook Form com validação Zod
- **Cliente HTTP**: Axios

## 📁 Estrutura do Projeto

```
frontend/
├── public/              # Arquivos estáticos
├── src/
│   ├── api/             # Serviços e endpoints da API
│   ├── components/      # Componentes de UI reutilizáveis
│   ├── context/         # Context React para gerenciamento de estado
│   ├── hooks/           # Hooks React personalizados
│   ├── pages/           # Páginas principais da aplicação
│   ├── schemas/         # Schemas de validação Zod
│   ├── App.jsx          # Componente principal da aplicação
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada da aplicação
├── .eslintrc.js         # Configuração do ESLint
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind CSS
└── vite.config.js       # Configuração do Vite
```

## 🚦 Como Iniciar

### Pré-requisitos

- Node.js (v20+)
- npm ou yarn

### Instalação

1. Clone o repositório
   ```bash
   git clone git@github.com:vv/frontend.git
   cd vv/frontend
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra seu navegador e acesse `http://localhost:5173`

## 🔧 Scripts Disponíveis

- `npm run start` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila para produção

## 📝 Estilo de Código e Convenções

- PascalCase para nomes de arquivos de componentes React (ex: UserCard.jsx)
- Exports nomeados para componentes
- Seguimos o Guia de Estilo Airbnb para formatação de código
- Arquitetura baseada em componentes

##  Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
