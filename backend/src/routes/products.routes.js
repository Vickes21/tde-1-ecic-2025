import { Router } from 'express';
import { validateRequest } from '../middlewares/validate-request.js';
import { productSchema, productUpdateSchema } from '../schemas/product.schema.js';
import { ProductController } from '../controllers/product.controller.js';

const router = Router();

// Recuperar todos os itens do catálogo
router.get('/', ProductController.getAllProducts);

// Localizar item específico por identificador
router.get('/:id', ProductController.getProductById);

// Criar novo produto
router.post('/', validateRequest(productSchema), ProductController.createProduct);

// Atualizar produto
router.put('/:id', validateRequest(productUpdateSchema), ProductController.updateProduct);

// Remover item
router.delete('/:id', ProductController.deleteProduct);

export default router;
