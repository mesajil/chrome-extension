# Chrome Hello World Extension

## Table of Contents

- [Chrome Hello World Extension](#chrome-hello-world-extension)
  - [Table of Contents](#table-of-contents)
  - [Descripción](#descripción)
  - [Características](#características)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Documentación](#documentación)

## Descripción

Este proyecto es una **Chrome Extension** de práctica diseñada para introducir conceptos básicos en el desarrollo de extensiones para el navegador Google Chrome. La extensión muestra un simple botón en el popup que, al ser clickeado, despliega una alerta en la página activa del navegador.

## Características

- **Interacción Básica**: Al hacer clic en el botón del popup, se ejecuta un script que muestra una alerta en la pestaña activa.
- **Registro de Eventos**: Registra en la consola del navegador un mensaje cada vez que se hace clic en el botón.
- **Uso de APIs de Chrome**: Utiliza `chrome.tabs` y `chrome.scripting` para interactuar con las pestañas del navegador y ejecutar scripts.

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/mesajil/chrome-extension.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd chrome-extension
   ```

3. **Carga la extensión en Chrome**:

   - Abre Chrome y ve a `chrome://extensions/`.
   - Activa el **Modo de desarrollador** en la esquina superior derecha.
   - Haz clic en **Cargar descomprimida** y selecciona la carpeta del proyecto.

## Uso

1. **Abre el navegador Chrome**.
2. **Haz clic en el ícono de la extensión** en la barra de herramientas.
3. **Haz clic en el botón "Say Hello"** en el popup.
4. **Observa la alerta** que aparece en la página activa y el mensaje en la consola del desarrollador.

## Documentación

Toda la información relevante sobre el desarrollo de esta extensión y otros conceptos relacionados con la creación de **Chrome Extensions** se encuentra en la carpeta `docs/` del repositorio. Aquí encontrarás guías, tutoriales y referencias útiles para expandir y mejorar tus habilidades en el desarrollo de extensiones para Chrome.

- [Docs](https://github.com/mesajil/chrome-extension/tree/main/docs)
  - [Tabs](https://github.com/mesajil/chrome-extension/blob/main/docs/tabs.md)

<!-- ## Contribuciones

Este es un proyecto de práctica, pero las contribuciones son bienvenidas. Si deseas mejorar esta extensión o agregar nuevas funcionalidades, sigue estos pasos:

1. **Haz un Fork del proyecto**.
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. **Realiza tus cambios** y **commitea** (`git commit -m 'Añadir nueva funcionalidad'`).
4. **Haz push** a la rama (`git push origin feature/nueva-funcionalidad`).
5. **Abre un Pull Request**.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---

¡Gracias por utilizar y contribuir a esta Chrome Extension de práctica! -->
