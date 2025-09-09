import pg from 'pg';
const { Pool } = pg;

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'pollo_asado_db7',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});


// Función para crear las tablas necesarias
export const initDatabase = async () => {
  try {
    await pool.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    // Crear tabla de usuarios
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        role VARCHAR(20) DEFAULT 'customer',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Crear tabla de categorías
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(100) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Crear tabla de productos
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10,2) NOT NULL,
        image_url VARCHAR(255),
        category_id UUID REFERENCES categories(id),
        available BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Crear tabla de pedidos
    await pool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES users(id),
        customer_name VARCHAR(100) NOT NULL,
        customer_phone VARCHAR(20) NOT NULL,
        pickup_method VARCHAR(50) NOT NULL,
        total_amount DECIMAL(10,2) NOT NULL,
        items JSONB NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insertar usuario administrador por defecto
    await pool.query(`
      INSERT INTO users (name, email, password, role) 
      VALUES ('Administrador', 'admin@pollasado.com', '$2b$10$rQqzE1sQV0a9CmJgLVnFLuDXyT5zQkOYWFdH5FzTSVE8YrGsQ5Huu', 'admin')
      ON CONFLICT (email) DO NOTHING;
    `);
    // Contraseña por defecto: admin123

    // Insertar categorías por defecto
await pool.query(`
  INSERT INTO categories (name, description) VALUES
  ('Pollos Asados', 'Deliciosos pollos asados con nuestras especias secretas'),
  ('Combos', 'Promociones y combinaciones especiales para compartir'),
  ('Bebidas', 'Refrescos y bebidas para acompañar tu comida'),
  ('Salchipapas o Huevopapas', 'Platos con papas, salchichas o huevo para todos los gustos'),
  ('Quesadillas', 'Quesadillas rellenas con queso y otros ingredientes'),
  ('Hamburguesas', 'Jugosas hamburguesas con distintos acompañamientos'),
  ('Empanadas Fritas', 'Empanadas crujientes y sabrosas'),
  ('Chorrillana', 'Papas fritas con carne, cebolla y huevo'),
  ('Wrap de Pollo', 'Wrap relleno de pollo y vegetales frescos'),
  ('Menu Infantil', 'Platos pensados para los más pequeños'),
  ('Papas Fritas', 'Papas fritas doradas y crujientes'),
  ('Completos', 'Hot dogs con múltiples ingredientes'),
  ('Sandwich', 'Variedad de sándwiches para todos los gustos'),
  ('Hallullones', 'Pan hallulla relleno con distintos ingredientes'),
  ('Extras', 'Acompañamientos y adicionales para tu comida')
  ON CONFLICT DO NOTHING;
`);



    console.log('✅ Base de datos inicializada correctamente');
  } catch (error) {
    console.error('❌ Error al inicializar base de datos:', error);
  }
};

// Inicializar la base de datos al importar este módulo
initDatabase();

export default pool;