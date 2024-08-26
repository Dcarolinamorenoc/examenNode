## Estudiante:

```js
Diana Carolina Moreno Cárdenas
```



### Instalaciones Necesarias

- Necesario para conectar y interactuar con la base de datos MongoDB.

```js
npm i mongodb
```

- Framework web esencial para crear y gestionar el servidor de la aplicación.

```js
npm i express
```

- Permite cargar variables de entorno desde un archivo .env, crucial para la configuración segura de la aplicación.

```js
npm i dotenv
```

- Utilizado para validar y sanear los datos de entrada en las rutas de la API.

```js
npm i express-validator
```

- Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```js
npm run dev
```




# Encriptador

**Tiempo de ejecución**: 4 Horas

**Nivel de dificultad:** ★★★★★



## **Problematica**

El equipo está enfrentando un desafío de cuatro horas para desarrollar una aplicación web que permita la encriptación y desencriptación de textos de forma sencilla y efectiva. El objetivo es poder intercambiar mensajes secretos usando un método de encriptación basado en la sustitución de letras por cadenas de texto predefinidas.



# Requisitos Técnicos

El desafío principal radica en implementar una aplicación funcional que cumpla con los siguientes requisitos:

## 1. **Encriptación y Desencriptación Bidireccional:**
   - Implementar la lógica de encriptación donde cada letra específica ("e", "i", "a", "o", "u") se transforma en una cadena correspondiente ("enter", "imes", "ai", "ober", "ufat").
   - Desarrollar la funcionalidad inversa que permita a los usuarios desencriptar el texto, devolviendo las cadenas encriptadas a su letra original.
## 2. **Interfaz de Usuario Intuitiva:**
   - Crear una interfaz en la que los usuarios puedan ingresar el texto para encriptar o desencriptar.
   - Incluir opciones claras para que el usuario elija entre las dos funciones disponibles (encriptar o desencriptar).
   - Mostrar el resultado de la operación en la pantalla de manera clara.
## 3. **Restricciones y Validaciones:**
   - Asegurar que el sistema funcione exclusivamente con letras minúsculas, sin permitir el uso de caracteres especiales o letras acentuadas.
   - Implementar mecanismos que validen la entrada del usuario para cumplir con estas restricciones.
## 4. **Funcionalidad Extra de Copiado:**
   - Incluir un botón adicional que permita a los usuarios copiar el texto encriptado o desencriptado al portapapeles con un solo clic, simulando la función de "Ctrl+C".
## 5. **Gestión del Tiempo y Proceso de Desarrollo:**
   - Organizar el trabajo en un entorno ágil utilizando Trello para gestionar tareas. Aunque el uso de Trello no será evaluado, será crucial para mantener el progreso bajo control y asegurarse de cumplir con el plazo de cuatro horas.




# **Objetivo**

### **Desafío Técnico:**

El equipo debe encontrar la mejor manera de implementar esta lógica de encriptación y desencriptación de manera eficiente, asegurando que el proceso sea rápido y sin errores, incluso cuando se manejen textos más largos. Además, deben asegurarse de que la interfaz de usuario sea lo suficientemente clara y amigable para que cualquier usuario pueda entender cómo utilizar la aplicación sin necesidad de instrucciones adicionales.

### **Resultado Esperado:**

Al finalizar las cuatro horas, se espera que el equipo entregue una aplicación completamente funcional que permita a los usuarios encriptar y desencriptar textos de manera fácil y eficiente, cumpliendo con todos los requisitos técnicos y de interfaz propuestos. Además, se valorará la creatividad en la solución implementada y la capacidad de gestionar efectivamente el tiempo y los recursos disponibles.

### **Mensaje Secreto para Desencriptar:**

```tex
¡Fenterlimescimesdaidenters, hais lobergraidober dentersbloberqufatenterair enterstenter menternsaijenter!
```



# Rúbrica Evaluativa

## **1. Implementación de la Encriptación y Desencriptación (10%)**

- **0 puntos:** No se implementó la encriptación ni la desencriptación, o el código tiene errores graves que impiden su funcionalidad.
- **20 puntos:** Se implementó la encriptación o desencriptación de manera parcial, pero con errores que afectan la conversión de texto.
- **50 puntos:** La encriptación y desencriptación funcionan, pero hay errores en casos específicos o no se siguen todas las reglas de conversión correctamente.
- **100 puntos:** La encriptación y desencriptación funcionan perfectamente según las reglas dadas. La conversión es precisa y sin errores.

## **2. Interfaz de Usuario (15%)**

- **0 puntos:** No se implementó una interfaz de usuario o la interfaz es extremadamente básica y poco funcional.
- **20 puntos:** La interfaz permite la interacción básica, pero es poco intuitiva o no muestra correctamente los resultados de encriptación/desencriptación.
- **50 puntos:** La interfaz es funcional y permite la encriptación y desencriptación, pero carece de elementos visuales o usabilidad mejorada.
- **100 puntos:** La interfaz es intuitiva, estéticamente agradable y muestra claramente los resultados de encriptación y desencriptación. Se incluye un diseño que sigue las mejores prácticas de UX/UI.

## **3. Cumplimiento de Requisitos Técnicos (10%)**

- **0 puntos:** No se cumplen los requisitos técnicos, como el uso de letras minúsculas, evitar acentos o caracteres especiales.
- **20 puntos:** Se cumple uno o más requisitos técnicos, pero con errores significativos.
- **50 puntos:** Se cumplen la mayoría de los requisitos técnicos, pero con pequeños errores o excepciones no manejadas correctamente.
- **100 puntos:** Todos los requisitos técnicos se cumplen a la perfección, sin errores. Se manejan correctamente todas las excepciones y limitaciones especificadas.

## **4. Implementación de Funcionalidades Extras (10%)**

- **0 puntos:** No se implementaron las funcionalidades extras.
- **20 puntos:** Se intentó implementar alguna funcionalidad extra, pero no funciona correctamente.
- **50 puntos:** Se implementó una funcionalidad extra que funciona parcialmente o con errores menores.
- **100 puntos:** Se implementaron correctamente las funcionalidades extras, como el botón de copiar texto, que funciona perfectamente y añade valor a la aplicación.

## **5. Calidad del Código y Organización (10%)**

- **0 puntos:** El código es desorganizado, difícil de leer y contiene múltiples errores.
- **20 puntos:** El código es funcional pero desorganizado, con poca o ninguna documentación y malas prácticas de codificación.
- **50 puntos:** El código es legible y sigue algunas buenas prácticas, pero podría mejorar en organización o documentación.
- **100 puntos:** El código está bien estructurado, es legible, sigue buenas prácticas de programación, y está bien documentado.

## **6. Uso de Web Workers para el consumo del api (10%)**

- **0 puntos:** No se implementaron Web Workers o la implementación no funciona.
- **20 puntos:** Se intentó usar Web Workers, pero no se integran correctamente en el flujo de trabajo o presentan errores significativos.
- **50 puntos:** Web Workers están implementados y funcionan, pero su uso no optimiza significativamente el rendimiento o presentan pequeños errores.
- **100 puntos:** Los Web Workers están implementados correctamente, mejoran el rendimiento de la encriptación y desencriptación, y funcionan sin errores.

## **7. Uso de Módulos Frontend 'module', Backend 'commonjs' (10%)**

- **0 puntos:** No se utilizaron módulos o la implementación es incorrecta.
- **20 puntos:** Se utilizaron módulos, pero de manera ineficiente o con errores que afectan la funcionalidad.
- **50 puntos:** Se utilizaron módulos para estructurar el código, pero hay áreas que podrían estar mejor organizadas o reutilizadas.
- **100 puntos:** Los módulos están correctamente implementados, con una clara separación de responsabilidades y un código modular y reutilizable.

## **8. Realización de APIs utilizando Express (15%)**

- **0 puntos:** No se crearon APIs o las APIs creadas no funcionan.
- **20 puntos:** Se intentó crear APIs, pero presentan errores significativos o no cumplen con las especificaciones requeridas.
- **50 puntos:** Se crearon dos APIs que funcionan, pero tienen errores menores o no están completamente optimizadas.
- **100 puntos:** Se crearon dos APIs utilizando Express que funcionan correctamente, están bien estructuradas y cumplen con todas las especificaciones. Las APIs son eficientes y seguras.

## **9. Documentación y Entregables (10%)**

- **0 puntos:** No se entrega la documentación requerida ni el código fuente en el repositorio de GitHub.
- **25 puntos:** La documentación o el código fuente están incompletos o presentan errores significativos.
- **50 puntos:** La documentación y el código fuente están mayormente completos, pero con algunos errores menores o faltantes.
- **75 puntos:** La documentación y el código fuente están correctos, con pequeños problemas de claridad o detalles menores faltantes.
- **100 puntos:** La documentación y el código fuente están completos, claros y bien organizados, proporcionando toda la información necesaria de manera eficiente.

## **10. GitHub y Entrega de Proyecto**

  - 🚨 **Cancelación o Anulación del Proyecto**: No se entregó ningún repositorio, su visualización está oculta (o no compartida con el Trainer) o hubo adulteración después de la fecha y hora establecida para su entrega. ***Evidencia de clonación o fork de algún repositorio, distribución y/o copia de dicho trabajo por cualquier medio de comunicación (verbal, digital, entre otros), se asumirá como cancelación del proyecto de manera definitiva.*** 🚨
  - **25 puntos**: Se creó el repositorio privado con el nombre `examenEncriptador`, pero en su rama principal no se encuentra el proyecto general ni ningún archivo relacionado.
  - **100 puntos**: Se creó exitosamente el repositorio privado con el nombre `examenEncriptador`, compartido con el correo `tech.campuslands@gmail.com`. En la rama principal se encuentra el proyecto general y todos los archivos relacionados, con evidencia de la participación periódica del equipo completo. Además, se tomó en cuenta el uso de *Conventional Commits* en los mensajes de commit.
