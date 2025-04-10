import { BaseModel } from './base.model.js';
import { products } from '../db/schema/products.js';

/**
 * Modelo para gerenciamento de produtos
 * Estende a classe base para herdar funcionalidades CRUD comuns
 */
export class ProductModel extends BaseModel {
  /**
   * Inicializa o modelo de produto
   */
  constructor() {
    super(products);
  }
}

// Exporta uma instância única do modelo de produto
export const productModel = new ProductModel();
