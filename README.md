Modulo 3 - Desafio 2
## TAREA 3x1
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

Para poner en práctica la manipulación del DOM y el uso de instrucciones condicionales como `if`, `else if` y `else`, además de operadores lógicos, se propone el desarrollo de tres ejercicios:

1. **Página con una imagen interactiva:**
   El primer ejercicio consiste en una página web que contiene una única imagen. La funcionalidad clave es que al hacer clic en un boton, se le agregue un borde de 2 píxeles, y al hacer clic nuevamente, el borde se quite. Esta interacción se puede implementar utilizando eventos del DOM, específicamente el evento `onClick`. El control del estado de la imagen (si tiene borde o no) se puede manejar mediante una estructura condicional `if-else`, que verifica si la imagen ya tiene el borde aplicado o no, para agregarlo o eliminarlo en consecuencia.

2. **Página de selección de stickers:**
   En este ejercicio, el objetivo es construir una página que permita seleccionar hasta 10 stickers de 3 tipos diferentes. Para ello, debajo de cada imagen de sticker habrá un campo de entrada donde el usuario puede indicar cuántos stickers desea de ese tipo. El total de stickers seleccionados se calculará cada vez que se haga click en un boton. Si la suma total de stickers es menor o igual a 10, se mostrará en un párrafo un mensaje indicando la cantidad exacta de stickers seleccionados, como "Llevas 5 stickers". Sin embargo, si la cantidad excede el límite de 10, el párrafo mostrará el mensaje "Llevas demasiados stickers". La lógica para verificar estas condiciones emplea operadores de comparación (`<=`) y una estructura `if-else` para decidir qué mensaje mostrar.

3. **Página de verificación de contraseña con select:**
   En el último ejercicio, se debe implementar una página que contenga tres elementos `select` con opciones de números del 1 al 9. El usuario debe seleccionar un número de cada `select` y hacer clic en un botón "Ingresar". Al hacerlo, se verificará si la combinación ingresada corresponde a una contraseña válida. Si la contraseña es "911", se mostrará un mensaje que dice "password 1 correcto", y si es "714", el mensaje será "password 2 es correcto". Para cualquier otra combinación, se mostrará "password incorrecto". En este caso, se utilizará una estructura `if-else if-else` para verificar las posibles combinaciones de contraseña y mostrar el mensaje adecuado.

Estos ejercicios no solo practican la manipulación del DOM y el uso de eventos, sino que también ayudan a comprender cómo utilizar estructuras de control condicionales para ejecutar diferentes acciones según las decisiones del usuario.
