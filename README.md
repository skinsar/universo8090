# Universo 8090 - Proyecto React

Este es el código fuente para el sitio web de "Universo 8090", un programa de radio retro de los años 80 y 90. El proyecto está construido con React (usando Vite) y estilizado con Tailwind CSS.

## 🚀 Cómo Empezar

Sigue estos pasos para poner el proyecto en funcionamiento en tu máquina local.

### 1. Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado (se recomienda la versión LTS).

### 2. Instalación

1.  **Clona o descarga el proyecto**:
    Si tienes `git` instalado:
    ```bash
    git clone [https://github.com/tu-usuario/universo-8090.git](https://github.com/tu-usuario/universo-8090.git)
    cd universo-8090
    ```
    Si no, simplemente descarga los archivos y colócalos en una carpeta llamada `universo-8090`.

2.  **Instala las dependencias**:
    Abre tu terminal en la raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```

### 3. Configuración de Variables de Entorno

1.  Crea un archivo `.env` en la raíz del proyecto copiando el archivo de ejemplo:
    ```bash
    cp .env.example .env
    ```

2.  Abre el archivo `.env` y reemplaza los valores de los placeholders con tu información real:

    -   `VITE_STREAM_URL`: La URL del stream de audio en vivo de tu radio.
    -   `VITE_PLAYLIST_EMBED_URL`: La URL para embeber una playlist de Spotify o YouTube.
    -   `VITE_WHATSAPP_NUMBER`: Tu número de WhatsApp (solo números, incluyendo código de país).
    -   `VITE_CONTACT_EMAIL`: La dirección de correo electrónico de contacto.

### 4. Ejecutar el Proyecto

Una vez instaladas las dependencias y configurado el entorno, inicia el servidor de desarrollo:

```bash
npm run dev