Introducción

   - El ejercicio de matrix busca generar una matriz a partir de una representación textual. Esta representación textual es convertida en dos estructuras internas: una para las filas y otra para las columnas de la matriz.

Descripción de la Funcionalidad

  Clase Matrix
     - La clase Matrix es el núcleo de la lógica de la aplicación. Esta clase se encarga de procesar una cadena de texto que representa una matriz, y convertirla en estructuras internas para filas y columnas.

     - Constructor de la clase Matrix

       - Entrada: Una cadena de texto (string) que representa la matriz, donde las filas están separadas por saltos de línea y los elementos de cada fila están separados por espacios.
      Proceso:
         - Eliminar espacios en blanco adicionales: La cadena de texto se procesa para eliminar espacios en blanco adicionales al principio y al final.
         - Dividir la cadena en filas: La cadena se divide en subcadenas (filas) usando los saltos de línea como delimitadores.
         - Dividir las filas en elementos: Cada fila se divide en elementos usando espacios como delimitadores y se convierten en números.
         - Filtrar filas vacías: Se eliminan las filas que no contienen elementos válidos.
         - Generar columnas: Se construye una matriz de columnas a partir de la matriz de filas, donde cada columna se forma tomando el i-ésimo elemento de cada fila.
Componente MatrixComponent
   - El componente MatrixComponent es el encargado de manejar la interacción con el usuario y la visualización de los resultados.

  Funcionalidad del MatrixComponent

    Entrada de datos:
       - El componente incluye un área de texto (textarea) donde el usuario puede introducir la matriz en formato textual.
       - Cada fila de la matriz se escribe en una nueva línea, y los elementos de cada fila se separan por espacios.
    Generación de la matriz:
       - Un botón permite al usuario generar la matriz a partir del texto introducido.
       - Al hacer clic en el botón, se crea una instancia de la clase Matrix usando el texto introducido.
       - Las filas y columnas generadas se almacenan en el estado del componente.
Visualización de los resultados:
   - El componente muestra las filas y columnas generadas en formato JSON, facilitando la verificación visual de los resultados.