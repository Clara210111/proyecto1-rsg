# Proyecto de Transferencias Bancarias

Este es un proyecto de simulación de transferencias bancarias entre cuentas. Permite a los usuarios realizar las siguientes acciones:

1. Iniciar sesión con un nombre de usuario y contraseña.
2. Visualizar la página principal con información relevante sobre las cuentas y transacciones.
3. Realizar una transferencia de dinero entre cuentas.

## Requisitos del Sistema

- Node.js >= 14.x
- MongoDB
- React.js

## Configuración

1. Clona el repositorio desde GitHub:

2. Instala las dependencias del servidor y del cliente:

   ```
   cd repositorio
   npm install
   cd client
   npm install
   ```

3. Configura la base de datos MongoDB en el archivo `server/config/db.js`.

4. Inicia el servidor y el cliente:

   ```
   npm run dev
   ```

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `server/`: Contiene el código del servidor Node.js.
  - `config/`: Configuraciones del servidor y la base de datos.
  - `controllers/`: Controladores para manejar las rutas y las operaciones.
  - `models/`: Modelos de datos para la base de datos.
  - `routes/`: Definición de rutas y endpoints de la API.
- `client/`: Contiene el código del cliente React.js.
  - `src/`: Archivos fuente del cliente.
    - `components/`: Componentes reutilizables.
    - `services/`: Servicios para realizar solicitudes al servidor.

## Funcionalidades

1. **Inicio de Sesión**
   - Página de inicio de sesión que permite a los usuarios autenticarse.
   - Utiliza autenticación de usuario con nombre de usuario y contraseña.

2. **Página Principal**
   - Muestra información relevante sobre las cuentas y las transacciones.
   - Permite al usuario realizar una transferencia de dinero entre cuentas.

3. **Transferencias**
   - Formulario de transferencias que valida los datos de origen, destino y cantidad.
   - Actualiza las cuentas y transacciones después de realizar una transferencia.

## Tecnologías Utilizadas

- Node.js y Express para el backend.
- MongoDB como base de datos NoSQL.
- React.js para el frontend.
- React Router para la navegación en el cliente.
- Axios para realizar solicitudes HTTP.
- CSS y Bootstrap para el diseño y estilos.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio desde GitHub.
2. Crea una nueva rama para tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commits: `git commit -am 'Añade nueva funcionalidad'`.
4. Haz push a la rama: `git push origin feature/nueva-funcionalidad`.
5. Crea un Pull Request en GitHub.

## Autores

- Clara Garcia Chavez
