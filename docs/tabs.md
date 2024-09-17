# Chrome tabs

## Parámetros de `chrome.tabs.query`

La función `chrome.tabs.query` acepta un objeto llamado `queryInfo` que puede contener varios de los siguientes parámetros. Cada parámetro actúa como un filtro para determinar qué pestañas se incluirán en el resultado.

### 1. `active` (`boolean`)

- **Descripción:** Filtra las pestañas que están activas en su ventana actual.
- **Uso:** `true` para pestañas activas, `false` para inactivas.
- **Ejemplo:**
  ```javascript
  {
    active: true;
  }
  ```

### 2. `lastFocusedWindow` (`boolean`)

- **Descripción:** Filtra las pestañas que están en la última ventana enfocada por el usuario.
- **Uso:** `true` para limitar la búsqueda a la última ventana enfocada.
- **Ejemplo:**
  ```javascript
  {
    lastFocusedWindow: true;
  }
  ```

### 3. `currentWindow` (`boolean`)

- **Descripción:** Filtra las pestañas que están en la ventana actual del navegador.
- **Uso:** `true` para restringir la búsqueda a la ventana actual.
- **Ejemplo:**
  ```javascript
  {
    currentWindow: true;
  }
  ```

### 4. `windowId` (`integer`)

- **Descripción:** Filtra las pestañas que pertenecen a una ventana específica identificada por su ID.
- **Uso:** Proporciona el ID de la ventana.
- **Ejemplo:**
  ```javascript
  {
    windowId: 2048159334;
  }
  ```

### 5. `windowType` (`string`)

- **Descripción:** Filtra las pestañas según el tipo de ventana.
- **Valores Posibles:**
  - `"normal"`: Ventanas normales.
  - `"popup"`: Ventanas emergentes.
  - `"panel"`: Paneles (aunque algunos tipos pueden estar limitados según la versión de Chrome).
  - `"devtools"`: Ventanas de herramientas de desarrollo.
- **Ejemplo:**
  ```javascript
  {
    windowType: "popup";
  }
  ```

### 6. `status` (`string`)

- **Descripción:** Filtra las pestañas según su estado de carga.
- **Valores Posibles:**
  - `"loading"`: La pestaña está en proceso de carga.
  - `"complete"`: La pestaña ha terminado de cargar.
- **Ejemplo:**
  ```javascript
  {
    status: "complete";
  }
  ```

### 7. `title` (`string`)

- **Descripción:** Filtra las pestañas que contienen una cadena específica en su título.
- **Uso:** Puedes usar subcadenas para coincidir con títulos que las contengan.
- **Ejemplo:**
  ```javascript
  {
    title: "Chrome";
  }
  ```

### 8. `url` (`string` | `string[]`)

- **Descripción:** Filtra las pestañas que coinciden con una URL específica o un patrón de URL.
- **Uso:** Puedes usar patrones de coincidencia con comodines.
- **Ejemplo:**
  ```javascript
  {
    url: "https://*.github.com/*";
  }
  // O para múltiples URLs:
  {
    url: ["https://www.google.com/*", "https://www.github.com/*"];
  }
  ```

### 9. `pinned` (`boolean`)

- **Descripción:** Filtra las pestañas que están ancladas (fijas) en la barra de pestañas.
- **Uso:** `true` para pestañas ancladas, `false` para no ancladas.
- **Ejemplo:**
  ```javascript
  {
    pinned: true;
  }
  ```

### 10. `highlighted` (`boolean`)

- **Descripción:** Filtra las pestañas que están resaltadas.
- **Uso:** `true` para pestañas resaltadas, `false` para no resaltadas.
- **Ejemplo:**
  ```javascript
  {
    highlighted: true;
  }
  ```

### 11. `audible` (`boolean`)

- **Descripción:** Filtra las pestañas que están reproduciendo sonido.
- **Uso:** `true` para pestañas audibles, `false` para no audibles.
- **Ejemplo:**
  ```javascript
  {
    audible: true;
  }
  ```

### 12. `muted` (`boolean`)

- **Descripción:** Filtra las pestañas que están silenciadas.
- **Uso:** `true` para pestañas silenciadas, `false` para no silenciadas.
- **Ejemplo:**
  ```javascript
  {
    muted: true;
  }
  ```

### 13. `discarded` (`boolean`)

- **Descripción:** Filtra las pestañas que han sido descartadas (liberadas de recursos para ahorrar memoria).
- **Uso:** `true` para pestañas descartadas, `false` para no descartadas.
- **Ejemplo:**
  ```javascript
  {
    discarded: true;
  }
  ```

### 14. `autoDiscardable` (`boolean`)

- **Descripción:** Filtra las pestañas que pueden ser descartadas automáticamente por el sistema.
- **Uso:** `true` para permitir descartar automáticamente, `false` para no permitirlo.
- **Ejemplo:**
  ```javascript
  {
    autoDiscardable: true;
  }
  ```

### 15. `groupId` (`integer`)

- **Descripción:** Filtra las pestañas que pertenecen a un grupo específico identificado por su ID.
- **Uso:** Proporciona el ID del grupo.
- **Ejemplo:**
  ```javascript
  {
    groupId: 12345;
  }
  ```

### 16. `index` (`integer`)

- **Descripción:** Filtra las pestañas que están en una posición específica dentro de su ventana.
- **Uso:** Proporciona el índice (comenzando en `0` para la primera pestaña).
- **Ejemplo:**
  ```javascript
  {
    index: 2;
  }
  ```

### 17. `id` (`integer` | `integer[]`)

- **Descripción:** Filtra las pestañas que tienen un ID específico o pertenecen a una lista de IDs.
- **Uso:** Proporciona el ID o una matriz de IDs.
- **Ejemplo:**
  ```javascript
  {
    id: 2048159335;
  }
  // O para múltiples IDs:
  {
    id: [2048159335, 2048159336];
  }
  ```

## Combinación de Parámetros

Puedes combinar múltiples parámetros en un solo objeto `queryInfo` para refinar aún más tu búsqueda. Cuando se combinan, las pestañas deben cumplir **todos** los criterios especificados.

**Ejemplo:** Obtener pestañas activas y ancladas en la ventana actual.

```javascript
chrome.tabs.query(
  { active: true, pinned: true, currentWindow: true },
  function (tabs) {
    tabs.forEach((tab) => {
      console.log("Título:", tab.title);
      console.log("URL:", tab.url);
    });
  }
);
```

## Ejemplo Completo de Uso

Supongamos que deseas obtener todas las pestañas que están abiertas en la ventana actual, que son visibles (no silenciadas) y que contienen "Chrome" en su título.

```javascript
chrome.tabs.query(
  {
    currentWindow: true,
    muted: false,
    title: "Chrome",
  },
  function (tabs) {
    tabs.forEach((tab) => {
      console.log("ID:", tab.id);
      console.log("Título:", tab.title);
      console.log("URL:", tab.url);
    });
  }
);
```

## Notas Adicionales

- **Deprecación de `selected`:** Anteriormente se usaba el parámetro `selected` para filtrar la pestaña activa, pero ahora se recomienda usar `active`. Asegúrate de utilizar `active` para mantener la compatibilidad con las versiones actuales y futuras de la API.

- **Patrones de URL:** Cuando uses el parámetro `url`, puedes utilizar comodines (`*`) para crear patrones flexibles. Por ejemplo, `"https://*.example.com/*"` coincidirá con cualquier subdominio de `example.com`.

- **Asincronía:** `chrome.tabs.query` es una función asíncrona. A partir de Manifest V3, también puedes usarla con Promesas utilizando `chrome.tabs.query().then(...)` si utilizas la API basada en Promesas.

## Recursos Útiles

- **Documentación Oficial de la API de Tabs de Chrome:** [Chrome Tabs API - chrome.tabs.query](https://developer.chrome.com/docs/extensions/reference/tabs/#method-query)
- **Ejemplos y Tutoriales:** La documentación oficial incluye ejemplos prácticos que pueden ayudarte a entender cómo manipular las pestañas en tus extensiones. Además, puedes encontrar tutoriales y proyectos en plataformas como [GitHub](https://github.com/) que muestran implementaciones reales.

## ¡Sigue Practicando!

Experimenta combinando diferentes parámetros para familiarizarte con cómo filtrar pestañas según tus necesidades. Por ejemplo, intenta crear funciones que:

- **Abren una nueva pestaña** con una URL específica.
- **Cierran pestañas** que cumplen ciertos criterios.
- **Modifican propiedades** de las pestañas, como silenciar una pestaña audible.

La práctica constante y la exploración de la documentación te ayudarán a dominar el desarrollo de extensiones para Chrome.

Si tienes alguna otra pregunta o necesitas más detalles sobre algún parámetro específico, ¡no dudes en preguntar!

---

## Tab Object

El objeto de una pestaña (`tab`) contiene diversas propiedades que describen su estado y características. A continuación, te explico cada uno de los campos que has proporcionado:

### Descripción de los Campos del Objeto `tab`

1. **`active`** (`boolean`)

   - **Descripción:** Indica si la pestaña está activa en su ventana actual. Solo una pestaña por ventana puede estar activa a la vez.
   - **Ejemplo:** `"active": true`

2. **`audible`** (`boolean`)

   - **Descripción:** Indica si la pestaña está reproduciendo sonido actualmente.
   - **Ejemplo:** `"audible": false`

3. **`autoDiscardable`** (`boolean`)

   - **Descripción:** Determina si la pestaña puede ser descartada automáticamente por el sistema para liberar memoria cuando el sistema está bajo presión.
   - **Ejemplo:** `"autoDiscardable": true`

4. **`discarded`** (`boolean`)

   - **Descripción:** Indica si la pestaña ha sido descartada. Las pestañas descartadas no consumen recursos significativos y se pueden recargar cuando el usuario las selecciona.
   - **Ejemplo:** `"discarded": false`

5. **`favIconUrl`** (`string`)

   - **Descripción:** La URL del favicon (ícono favorito) de la página cargada en la pestaña.
   - **Ejemplo:** `"favIconUrl": "https://github.githubassets.com/favicons/favicon-dark.svg"`

6. **`groupId`** (`number`)

   - **Descripción:** El ID del grupo al que pertenece la pestaña. Un valor de `-1` significa que la pestaña no está en ningún grupo.
   - **Ejemplo:** `"groupId": -1`

7. **`height`** (`number`)

   - **Descripción:** La altura de la pestaña en píxeles. Esta propiedad generalmente está disponible cuando trabajas con la API de ventanas (`windows` API) y no es comúnmente usada en la API de pestañas (`tabs` API).
   - **Ejemplo:** `"height": 1025`

8. **`highlighted`** (`boolean`)

   - **Descripción:** Indica si la pestaña está resaltada. Múltiples pestañas pueden estar resaltadas al mismo tiempo.
   - **Ejemplo:** `"highlighted": true`

9. **`id`** (`number`)

   - **Descripción:** El identificador único de la pestaña. Este ID es único dentro de la sesión de Chrome actual.
   - **Ejemplo:** `"id": 2048159335`

10. **`incognito`** (`boolean`)

    - **Descripción:** Indica si la pestaña está en una ventana de incógnito.
    - **Ejemplo:** `"incognito": false`

11. **`index`** (`number`)

    - **Descripción:** La posición de la pestaña dentro de su ventana, empezando desde `0` para la primera pestaña.
    - **Ejemplo:** `"index": 0`

12. **`lastAccessed`** (`number`)

    - **Descripción:** Marca de tiempo en milisegundos que indica la última vez que se accedió a la pestaña.
    - **Ejemplo:** `"lastAccessed": 1726532102879.694`

13. **`mutedInfo`** (`object`)

    - **Descripción:** Objeto que contiene información sobre si la pestaña está silenciada.
      - **`muted`** (`boolean`): Indica si la pestaña está silenciada.
    - **Ejemplo:**
      ```json
      "mutedInfo": {
          "muted": false
      }
      ```

14. **`pinned`** (`boolean`)

    - **Descripción:** Indica si la pestaña está anclada. Las pestañas ancladas ocupan menos espacio y se mantienen al inicio de la barra de pestañas.
    - **Ejemplo:** `"pinned": false`

15. **`selected`** (`boolean`)

    - **Descripción:** Indica si la pestaña está seleccionada. **Nota:** En versiones más recientes de la API, `selected` ha sido reemplazado por `active`.
    - **Ejemplo:** `"selected": true`

16. **`status`** (`string`)

    - **Descripción:** El estado de carga de la pestaña. Puede ser `"loading"` mientras la página se está cargando, o `"complete"` una vez que ha terminado de cargar.
    - **Ejemplo:** `"status": "complete"`

17. **`title`** (`string`)

    - **Descripción:** El título de la página que se muestra en la pestaña.
    - **Ejemplo:** `"title": "mesajil/chrome-extension: Chrome extension practice"`

18. **`url`** (`string`)

    - **Descripción:** La URL de la página cargada en la pestaña.
    - **Ejemplo:** `"url": "https://github.com/mesajil/chrome-extension"`

19. **`width`** (`number`)

    - **Descripción:** El ancho de la pestaña en píxeles. Similar a `height`, esta propiedad está más relacionada con la API de ventanas.
    - **Ejemplo:** `"width": 2048`

20. **`windowId`** (`number`)
    - **Descripción:** El ID de la ventana a la que pertenece la pestaña.
    - **Ejemplo:** `"windowId": 2048159334`

### Consideraciones Adicionales

- **`mutedInfo`**: Este objeto puede contener más propiedades en el futuro, así que es una buena práctica tratarlo como un objeto que puede extenderse.
- **`selected` vs `active`**: Aunque ambos indican si una pestaña está seleccionada o activa, `active` es la propiedad recomendada en la API actual. Es posible que `selected` quede obsoleta en futuras versiones.

### Recursos Útiles

- **Documentación Oficial de la API de Tabs de Chrome**: [Chrome Tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/)
- **Ejemplos y Tutoriales**: La documentación oficial incluye ejemplos prácticos que pueden ayudarte a entender cómo manipular las pestañas en tus extensiones.

### Ejemplo de Uso en una Extensión

Aquí tienes un pequeño ejemplo de cómo podrías obtener información de la pestaña actual:

```javascript
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let tab = tabs[0];
  console.log("Título:", tab.title);
  console.log("URL:", tab.url);
  console.log("Está activa:", tab.active);
  // Puedes acceder a otras propiedades de la pestaña aquí
});
```

Este código utiliza la función `chrome.tabs.query` para obtener la pestaña activa en la ventana actual y luego imprime algunas de sus propiedades en la consola.

### ¡Sigue Practicando!

La mejor manera de aprender es practicando. Intenta crear pequeñas funcionalidades en tu extensión que interactúen con las pestañas, como abrir nuevas pestañas, cerrar pestañas existentes, o modificar propiedades de las mismas. No dudes en consultar la documentación oficial y buscar ejemplos en línea para inspirarte.

Si tienes alguna pregunta específica o necesitas más detalles sobre alguna propiedad, ¡estaré encantado de ayudarte!

---

```javascript
[
  {
    active: true,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: "",
    groupId: -1,
    height: 1025,
    highlighted: true,
    id: 2048157886,
    incognito: false,
    index: 0,
    lastAccessed: 1726533196961.886,
    mutedInfo: {
      muted: false,
    },
    pinned: false,
    selected: true,
    status: "complete",
    title: "",
    url: "",
    width: 2048,
    windowId: 2048157885,
  },
];
```

---
