import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


// Importar rotas
import productRoutes from './routes/products.routes.js';

// Configuração da aplicação
const application = express();
const PORTA = process.env.PORT || 3000;

// Configuração de middlewares globais
application.use(cors({
  origin: 'http://localhost:5173',
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

// Rotas
application.use('/api/products', productRoutes);

// Inicialização do servidor
application.listen(PORTA, () => {
  console.log(`Servidor iniciado e escutando na porta ${PORTA}`);
});

export default application;
