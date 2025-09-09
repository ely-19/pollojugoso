import express from 'express';
import pool from '../config/database.js';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Obtener todas las categorías activas (público)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM categories WHERE active = true ORDER BY name'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear nueva categoría (solo admin)
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { name, description, image_url } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre de la categoría es requerido' });
    }

    const result = await pool.query(
      'INSERT INTO categories (name, description, image_url) VALUES ($1, $2, $3) RETURNING *',
      [name, description || null, image_url || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar categoría (solo admin)
router.put('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image_url, active } = req.body;

    const result = await pool.query(
      'UPDATE categories SET name = $1, description = $2, image_url = $3, active = $4 WHERE id = $5 RETURNING *',
      [name, description, image_url, active, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar categoría (solo admin)
router.delete('/:id', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si hay productos en esta categoría
    const productsInCategory = await pool.query(
      'SELECT COUNT(*) FROM products WHERE category_id = $1',
      [id]
    );

    if (parseInt(productsInCategory.rows[0].count) > 0) {
      return res.status(400).json({ 
        message: 'No se puede eliminar la categoría porque tiene productos asociados' 
      });
    }

    const result = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.json({ message: 'Categoría eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;