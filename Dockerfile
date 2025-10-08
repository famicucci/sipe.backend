# Dockerfile para sipe.backend (Node.js + Express)
FROM node:22-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Exponer el puerto (ajusta si usas otro)
EXPOSE 4000

# Comando para iniciar el backend
CMD ["npm", "start"]
