# Utilizar node.js como base
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar primero solo package.json
COPY package.json ./

# Instalar dependencias con resolución forzada
RUN npm install --legacy-peer-deps --force

# Copiar el resto del código
COPY . .

# Exponer el puerto para desarrollo
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"] 