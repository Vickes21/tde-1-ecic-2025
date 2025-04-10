import { db } from '../db/index.js';
import { eq } from 'drizzle-orm';

/**
 * Classe base para todos os modelos
 * Fornece métodos CRUD comuns que podem ser herdados
 */
export class BaseModel {
  /**
   * Inicializa o modelo com a tabela do banco de dados
   * @param {Object} table - Tabela do Drizzle ORM
   */
  constructor(table) {
    this.table = table;
    this.db = db;
  }

  /**
   * Recupera todos os registros da tabela
   * @returns {Promise<Array>} Lista de registros
   */
  async findAll() {
    try {
      return await this.db.select().from(this.table);
    } catch (error) {
      throw new Error(`Erro ao buscar registros: ${error.message}`);
    }
  }

  /**
   * Localiza um registro pelo seu ID
   * @param {number} id - ID do registro
   * @returns {Promise<Object|null>} Registro encontrado ou null
   */
  async findById(id) {
    try {
      const result = await this.db.select()
        .from(this.table)
        .where(eq(this.table.id, id));
      return result.length > 0 ? result[0] : null;
    } catch (error) {
      throw new Error(`Erro ao buscar registro por ID: ${error.message}`);
    }
  }

  /**
   * Cria um novo registro
   * @param {Object} data - Dados do registro
   * @returns {Promise<Object>} Registro criado
   */
  async create(data) {
    try {
      const result = await this.db.insert(this.table)
        .values(data)
        .$returningId();
      return result[0];
    } catch (error) {
      throw new Error(`Erro ao criar registro: ${error.message}`);
    }
  }

  /**
   * Atualiza um registro existente
   * @param {number} id - ID do registro
   * @param {Object} data - Novos dados do registro
   * @returns {Promise<Object|null>} Registro atualizado ou null
   */
  async update(id, data) {
    try {
      await this.db.update(this.table)
        .set({
          ...data,
          updatedAt: new Date()
        })
        .where(eq(this.table.id, id));
      
      return await this.findById(id);
    } catch (error) {
      throw new Error(`Erro ao atualizar registro: ${error.message}`);
    }
  }

  /**
   * Remove um registro
   * @param {number} id - ID do registro
   * @returns {Promise<boolean>} True se removido com sucesso
   */
  async delete(id) {
    try {
      await this.db.delete(this.table)
        .where(eq(this.table.id, id));
      return true;
    } catch (error) {
      throw new Error(`Erro ao remover registro: ${error.message}`);
    }
  }
}
