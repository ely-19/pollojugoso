# 🍗 Sistema de Pollo Asado - Aplicación Web Completaaaa

Una aplicación web completa para un local de pollo asado que incluye frontend en React, backend en Express con PostgreSQL, sistema de autenticación JWT, carrito de compras, y panel administrativo.

## 🚀 Características Principales

### Para Clientes
- ✅ **Navegación intuitiva** con páginas de inicio, menú, historia y contacto
- ✅ **Registro y autenticación** de usuarios con JWT
- ✅ **Carrito de compras** interactivo con funciones CRUD
- ✅ **Menú organizado por categorías** con imágenes de productos
- ✅ **Sistema de pedidos** que envía información directamente a WhatsApp
- ✅ **Proceso de checkout** con información de pago por transferencia
- ✅ **Enlaces directos** a redes sociales (Instagram y Facebook)
- ✅ **Diseño responsive** optimizado para móviles y desktop

### Para Administradores  
- ✅ **Panel administrativo separado** con acceso restringido
- ✅ **Gestión completa de productos** (crear, editar, eliminar)
- ✅ **Subida de imágenes** servidas desde carpeta pública
- ✅ **Gestión de categorías** de productos
- ✅ **Interface segura** protegida contra accesos no autorizados

### Técnicas
- ✅ **Frontend**: React con TypeScript, Tailwind CSS, React Router
- ✅ **Backend**: Express.js con arquitectura REST
- ✅ **Base de datos**: PostgreSQL con tablas relacionales
- ✅ **Autenticación**: JWT con roles de usuario
- ✅ **Seguridad**: Helmet, CORS, bcrypt para contraseñas
- ✅ **Subida de archivos**: Multer para gestión de imágenes

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **PostgreSQL** (versión 12 o superior)
- **npm** o **yarn**

## 🛠 Instalación

### 1. Clonar y configurar el proyecto

```bash
# Instalar dependencias
npm install

# Crear carpeta para subida de imágenes
mkdir -p public/uploads
```

### 2. Configurar Base de Datos PostgreSQL

```sql
-- Conectar a PostgreSQL y crear la base de datos
CREATE DATABASE pollo_asado_db7;
CREATE USER pollo_user WITH PASSWORD 'pollotito';
GRANT ALL PRIVILEGES ON DATABASE pollo_asado_db TO pollo_user;
```

### 3. Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# Base de datos
# Base de datos
PORT=3001
JWT_SECRET=pollotito
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pollo_asado_db7
DB_USER=postgres
DB_PASSWORD=postgres

# JWT
JWT_SECRET=tu_clave_jwt_muy_segura_aqui

# Servidor
PORT=3001
NODE_ENV=development
```

### 4. Inicializar la Base de Datos

Al ejecutar el servidor por primera vez, se crearán automáticamente:

- ✅ Todas las tablas necesarias (users, categories, products, orders)
- ✅ Usuario administrador por defecto
- ✅ Categorías básicas de productos

**Credenciales del administrador por defecto:**
- Email: `admin@pollasado.com`
- Contraseña: `admin123`

## 🚀 Ejecución

### Desarrollo

```bash
# Ejecutar servidor backend y frontend simultáneamente
npm run dev

# O ejecutar por separado:
# Backend: npm run server
# Frontend: npm run client
```

### Producción

```bash
# Construir frontend
npm run build

# Ejecutar servidor
npm run build-server
```

El servidor estará disponible en:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

## 📁 Estructura del Proyecto

```
pollo-asado-restaurant/
├── server/                    # Backend Express
│   ├── config/               
│   │   └── database.js       # Configuración PostgreSQL
│   ├── middleware/           
│   │   └── auth.js           # Middleware JWT y autenticación
│   ├── routes/               
│   │   ├── auth.js           # Rutas de autenticación
│   │   ├── products.js       # Rutas de productos
│   │   ├── categories.js     # Rutas de categorías
│   │   └── orders.js         # Rutas de pedidos
│   └── index.js              # Servidor principal
├── src/                      # Frontend React
│   ├── components/           # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/             # Contextos React
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── pages/                # Páginas principales
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Cart.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Checkout.tsx
│   │   └── AdminPanel.tsx
│   └── App.tsx               # Componente principal
├── public/
│   └── uploads/              # Imágenes de productos
└── README.md
```

## 🔐 Sistema de Autenticación

### Roles de Usuario
- **Cliente (`customer`)**: Puede navegar, agregar productos al carrito y hacer pedidos
- **Administrador (`admin`)**: Acceso total al panel administrativo

### Flujo de Autenticación
1. Registro/Login → Token JWT generado
2. Token almacenado en localStorage
3. Token enviado en headers para rutas protegidas
4. Middleware verifica y decodifica token
5. Acceso otorgado según rol de usuario

## 🛒 Sistema de Carrito y Pedidos

### Funcionalidades del Carrito
- Agregar productos con cantidad
- Modificar cantidades
- Eliminar productos
- Cálculo automático de totales
- Persistencia durante la sesión

### Proceso de Pedido
1. **Checkout**: Cliente completa formulario con datos de contacto
2. **Pago**: Sistema indica que solo se acepta transferencia bancaria  
3. **WhatsApp**: Pedido se envía automáticamente al WhatsApp del negocio
4. **Mensaje**: Include detalles completos del pedido y instrucciones de pago

## 👨‍💼 Panel Administrativo

### Funcionalidades
- **Gestión de Productos**:
  - Crear nuevos productos con imagen
  - Editar productos existentes  
  - Eliminar productos
  - Marcar disponibilidad

- **Gestión de Imágenes**:
  - Subida de imágenes (JPG, PNG, GIF, WebP)
  - Almacenamiento en `/public/uploads`
  - Límite de 5MB por imagen
  - Nombres únicos generados automáticamente

### Acceso Seguro
- Ruta `/admin` protegida por rol
- Solo usuarios con rol `admin` pueden acceder
- Verificación de token en cada operación

## 🔧 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión  
- `GET /api/auth/me` - Obtener datos del usuario actual

### Productos
- `GET /api/products` - Listar productos disponibles
- `GET /api/products/:id` - Obtener producto específico
- `POST /api/products` - Crear producto (admin)
- `PUT /api/products/:id` - Actualizar producto (admin)
- `DELETE /api/products/:id` - Eliminar producto (admin)

### Categorías  
- `GET /api/categories` - Listar categorías activas
- `POST /api/categories` - Crear categoría (admin)
- `PUT /api/categories/:id` - Actualizar categoría (admin)
- `DELETE /api/categories/:id` - Eliminar categoría (admin)

### Pedidos
- `POST /api/orders` - Crear nuevo pedido
- `GET /api/orders/my-orders` - Obtener pedidos del usuario

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Rojo (`#DC2626`) - Representa la calidez del pollo asado
- **Secundario**: Amarillo dorado (`#F59E0B`) - Evoca el dorado del pollo  
- **Acentos**: Verde para WhatsApp, azul/rosa para redes sociales

### Características de Diseño
- **Responsive**: Optimizado para móviles, tablets y desktop
- **Animaciones**: Transiciones suaves en hover y interacciones
- **Tipografía**: Fuentes legibles con jerarquía clara
- **Iconografía**: Lucide React para iconos consistentes
- **Espaciado**: Sistema de 8px para alineación perfecta

## 📱 Integración WhatsApp

### Configuración
- Número de WhatsApp: `950902706` (configurable en `server/routes/orders.js`)
- Mensaje automático generado con:
  - Datos del cliente
  - Lista detallada de productos  
  - Total del pedido
  - Instrucciones de pago
  - Fecha y hora del pedido

### Personalización del Mensaje
Para modificar el mensaje de WhatsApp, editar la función `generateWhatsAppMessage` en `/server/routes/orders.js`:

```javascript
const generateWhatsAppMessage = (order) => {
  // Personalizar mensaje aquí
  let message = `🍗 *NUEVO PEDIDO - Pollo Asado*\n\n`;
  // ... resto del mensaje
  return message;
};
```

## 🔒 Seguridad

### Medidas Implementadas
- **Contraseñas**: Hasheadas con bcrypt (10 salts)
- **JWT**: Tokens con expiración de 24 horas
- **CORS**: Configurado para dominios específicos
- **Helmet**: Headers de seguridad HTTP
- **Validación**: Validación de entrada en todas las rutas
- **SQL Injection**: Uso de queries parametrizadas
- **File Upload**: Validación de tipos y tamaños de archivo

### Recomendaciones de Producción
1. **Variables de entorno**: Usar claves JWT complejas
2. **HTTPS**: Implementar SSL/TLS 
3. **Rate Limiting**: Limitar requests por IP
4. **Logs**: Implementar logging de errores y actividades
5. **Backup**: Configurar respaldos automáticos de la BD

## 🐛 Resolución de Problemas

### Problemas Comunes

**Error de conexión a la base de datos:**
```bash
# Verificar que PostgreSQL esté ejecutándose
sudo service postgresql start

# Verificar credenciales en .env
# Verificar que la base de datos existe
```

**Error "Cannot resolve module":**
```bash
# Limpiar caché e reinstalar
rm -rf node_modules package-lock.json
npm install
```

**Problemas con subida de imágenes:**
```bash
# Verificar permisos de la carpeta uploads
chmod 755 public/uploads
```

**Token JWT inválido:**
- Verificar que JWT_SECRET esté configurado
- Token puede haber expirado (24h por defecto)
- Cerrar sesión y volver a iniciar sesión

## 🚀 Despliegue en Producción

### Preparación
1. **Variables de entorno de producción**:
```env
NODE_ENV=production
DB_HOST=tu-servidor-db
DB_NAME=pollo_asado_prod
JWT_SECRET=clave_ultra_segura_de_produccion
```

2. **Build del frontend**:
```bash
npm run build
```

3. **Configurar servidor web** (nginx recomendado):
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:3001;
    }
    
    location /uploads {
        alias /ruta/al/proyecto/public/uploads;
    }
}
```

### Servicios Recomendados
- **Hosting**: DigitalOcean, AWS, Heroku
- **Base de datos**: PostgreSQL en RDS, DigitalOcean Managed DB
- **CDN**: Cloudflare para imágenes estáticas
- **Monitoreo**: PM2 para gestión de procesos Node.js

## 📞 Soporte y Contacto

Para dudas sobre la implementación o personalización:

1. **Revisar documentación** en este README
2. **Verificar logs** del servidor para errores específicos  
3. **Comprobar configuración** de base de datos y variables de entorno

## 📄 Licencia

Este proyecto está desarrollado para uso comercial de restaurantes y locales de comida. 

---

**¡Tu sistema de pollo asado está listo para servir a tus clientes! 🍗**

*Desarrollado con ❤️ para el mejor pollo asado de la ciudad*