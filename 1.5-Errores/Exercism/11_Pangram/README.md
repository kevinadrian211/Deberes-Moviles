1. Lógica del Pangrama (PangramChecker.tsx):

 - isPangram(paragraph: string): boolean: Esta función toma un párrafo como entrada y devuelve un booleano que indica si es un pangrama o no. Funciona de la siguiente manera:
  - Convierte el párrafo en minúsculas utilizando toLowerCase().
  - Utiliza una expresión regular (/[^a-z]/g) para eliminar todos los caracteres que no son letras del alfabeto.
  - Convierte el resultado en un conjunto utilizando new Set(), lo que elimina duplicados y solo deja letras únicas.
  - Compara el tamaño del conjunto con 26 para determinar si todas las letras del alfabeto están presentes.
2. Componente React (App.tsx):

 - App: Este componente es la aplicación principal de React.
  - Define un párrafo que se va a verificar.
  - Renderiza el componente PangramChecker y pasa el párrafo como una prop.
3. Componente de Resultado del Pangrama (PangramChecker.tsx):

 - Este componente recibe el párrafo como una prop y utiliza la función isPangram para determinar si es un pangrama o no.
 - Renderiza el párrafo y muestra un mensaje indicando si es un pangrama o no.
4. Lógica del Pangrama (PangramChecker.tsx):

 - La función isPangram se exporta para que pueda ser utilizada por otros componentes.
 - No depende de ningún otro componente o funcionalidad del proyecto.
5. Componente React (App.tsx):

 - Importa la función PangramChecker del archivo PangramChecker.tsx.
 - Utiliza PangramChecker para verificar el párrafo y mostrar el resultado en la interfaz de usuario.