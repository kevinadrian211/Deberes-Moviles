# Conversor de ADN a ARN

Este proyecto es una herramienta simple para convertir secuencias de ADN a secuencias de ARN. El ADN y el ARN son moléculas fundamentales en la biología molecular y la genética, y comprenden la base de la codificación, transmisión y expresión de la información genética en los organismos vivos.

## Funcionamiento

El proyecto consta de un componente de React llamado `DnaToRnaConverter` y una función TypeScript llamada `toRna`.

### Componente `DnaToRnaConverter`

El componente `DnaToRnaConverter` proporciona una interfaz de usuario donde el usuario puede ingresar una secuencia de ADN. Cuando el usuario hace clic en un botón para convertir la secuencia de ADN a ARN, se llama a la función `toRna` con la secuencia de ADN como argumento. La secuencia de ARN resultante se muestra en la interfaz de usuario.

### Función `toRna`

La función `toRna` toma una cadena de ADN como entrada y devuelve su correspondiente cadena de ARN. Realiza la conversión de cada nucleótido individual de la secuencia de ADN a su nucleótido correspondiente de ARN utilizando un switch. Si encuentra un nucleótido que no coincide con ninguno de los cuatro caracteres válidos ('G', 'C', 'T', 'A'), lanza un error indicando que la entrada de ADN es inválida.

## Ejemplos

Puedes probar el funcionamiento del proyecto ingresando diferentes secuencias de ADN y verificando las secuencias de ARN resultantes.

- Secuencia de ADN: "GCTA"
  - Secuencia de ARN resultante: "CGAU"

- Secuencia de ADN: "ATCG"
  - Secuencia de ARN resultante: "UAGC"

- Secuencia de ADN: "ACGT"
  - Secuencia de ARN resultante: "UGCA"

- Secuencia de ADN: "TTAA"
  - Secuencia de ARN resultante: "AAUU"

- Secuencia de ADN: "GGCC"
  - Secuencia de ARN resultante: "CCGG"
