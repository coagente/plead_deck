# Presentación React con Reveal.js y Docker

Este proyecto es una presentación web interactiva creada con React y Reveal.js, containerizada con Docker para facilitar su despliegue y distribución.

## Tecnologías utilizadas

- React 18
- TypeScript
- Reveal.js para presentaciones
- Docker para containerización
- Nginx como servidor web

## Requisitos

- Docker y Docker Compose instalados en tu sistema

## Cómo ejecutar el proyecto

### Usando Docker Compose (recomendado)

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-directorio>
   ```

2. Construye y ejecuta los contenedores:
   ```bash
   docker-compose up -d --build
   ```

3. Accede a la presentación en tu navegador:
   ```
   http://localhost:3000
   ```

4. Para detener los contenedores:
   ```bash
   docker-compose down
   ```

### Desarrollo local (sin Docker)

1. Instala las dependencias:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   npm start
   ```

3. Accede a la presentación en tu navegador:
   ```
   http://localhost:3000
   ```

## Estructura del proyecto

```
├── public/              # Archivos estáticos
├── src/                 # Código fuente
│   ├── components/      # Componentes React
│   │   └── Presentation.tsx  # Componente principal de la presentación
│   ├── assets/          # Activos (imágenes, etc.)
│   ├── App.tsx          # Componente principal
│   ├── App.css          # Estilos de la aplicación
│   ├── index.tsx        # Punto de entrada
│   └── index.css        # Estilos globales
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── Dockerfile           # Configuración para Docker
├── docker-compose.yml   # Configuración para Docker Compose
└── nginx.conf           # Configuración de Nginx para producción
```

## Notas importantes

- El proyecto está configurado para usar `--legacy-peer-deps` para resolver conflictos de dependencias
- No se requiere package-lock.json para la construcción con Docker
- Los volúmenes en docker-compose.yml están configurados para montar solo los archivos necesarios
- En producción, se recomienda quitar las líneas de volumes y environment del docker-compose.yml

## Personalización

Para modificar el contenido de la presentación, edita el archivo `src/components/Presentation.tsx`. Cada sección representa una diapositiva.

## Licencia

MIT 