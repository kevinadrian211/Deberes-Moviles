1. Archivo ScoreCalculator.tsx:

 - La definición de la función score, que calcula el puntaje basado en las coordenadas x e y.
 - La definición del componente ScoreCalculator, que toma las coordenadas x e y como propiedades, calcula el puntaje utilizando la función score y muestra el resultado en el renderizado del componente.
2. Función score:

 - Esta función es independiente del componente React y se puede utilizar en cualquier lugar donde necesites calcular el puntaje basado en coordenadas x e y. Toma dos parámetros numéricos (x y y), calcula la distancia desde el origen utilizando la fórmula de la distancia euclidiana y devuelve un puntaje basado en la distancia según las condiciones establecidas.
3. Componente ScoreCalculator:

 - Este componente es una función de React que toma las coordenadas x e y como propiedades.
 - Dentro del componente, calculamos el puntaje llamando a la función score con las coordenadas proporcionadas.
 - Utilizamos el puntaje calculado para renderizar un mensaje que muestra las coordenadas del punto y su puntaje correspondiente.
4. Uso del componente ScoreCalculator en otros archivos:

 - Dentro de la función del componente App, se utiliza el componente ScoreCalculator varias veces para mostrar el puntaje calculado para diferentes puntos. Esto se hace mediante la inclusión de múltiples instancias del componente ScoreCalculator dentro del JSX, con diferentes coordenadas x e y como props.