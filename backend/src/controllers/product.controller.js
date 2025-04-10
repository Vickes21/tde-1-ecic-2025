import { productModel } from '../models/product.model.js';

export class ProductController {
  /**
   * Recupera todos os produtos
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static async getAllProducts(req, res) {
    try {
      const products = await productModel.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  /**
   * Recupera um produto específico por ID
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static async getProductById(req, res) {
    try {
      const itemId = Number(req.params.id);
      
      if (isNaN(itemId)) {
        return res.status(400).json({ message: 'Identificador inválido fornecido' });
      }
      
      const product = await productModel.findById(itemId);
      
      if (!product) {
        return res.status(404).json({ message: 'Item não localizado no catálogo' });
      }
      
      res.status(200).json(product);
    } catch (error) {
      console.error('Falha ao localizar item específico:', error);
      res.status(500).json({ message: 'Falha no processamento da solicitação' });
    }
  }

  /**
   * Cria um novo produto
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static async createProduct(req, res) {
    try {
      const productId = await productModel.create(req.body);
      res.status(201).json(productId);
    } catch (error) {
      console.error('Falha ao adicionar novo item:', error);
      res.status(500).json({ message: 'Falha no processamento da solicitação' });
    }
  }

  /**
   * Atualiza um produto existente
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static async updateProduct(req, res) {
    try {
      const itemId = Number(req.params.id);
      
      if (isNaN(itemId)) {
        return res.status(400).json({ message: 'Identificador inválido fornecido' });
      }
      
      // Confirmar existência do item
      const existingItem = await productModel.findById(itemId);
      
      if (!existingItem) {
        return res.status(404).json({ message: 'Item não localizado no catálogo' });
      }
      
      // Atualizar produto
      const updatedProduct = await productModel.update(itemId, req.body);
      
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Falha ao modificar informações do item:', error);
      res.status(500).json({ message: 'Falha no processamento da solicitação' });
    }
  }

  /**
   * Remove um produto
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static async deleteProduct(req, res) {
    try {
      const itemId = Number(req.params.id);
      
      if (isNaN(itemId)) {
        return res.status(400).json({ message: 'Identificador inválido fornecido' });
      }
      
      // Verificar se o produto existe
      const existingProduct = await productModel.findById(itemId);
      
      if (!existingProduct) {
        return res.status(404).json({ message: 'Item não localizado no catálogo' });
      }
      
      await productModel.delete(itemId);
      
      res.status(204).send();
    } catch (error) {
      console.error('Falha ao remover item do catálogo:', error);
      res.status(500).json({ message: 'Falha no processamento da solicitação' });
    }
  }
}
