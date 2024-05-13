Componentes Principales

1. ProduceButton
Este componente representa un botón que permite producir chicles en la fábrica. Al hacer clic en este botón, se produce un chicle y se actualiza el stock correspondiente.

2. DistributeButton
Este componente representa un botón que permite distribuir chicles desde la fábrica. Al hacer clic en este botón, se distribuye un chicle y se actualiza el stock correspondiente.

3. StockDisplay
Este componente muestra el stock actual de chicles en la fábrica.

4. Product
Este componente representa un producto específico en la fábrica. Muestra su ID único, permite producir y distribuir este producto, y muestra su stock actual.

Estado de la Aplicación

La aplicación utiliza el hook de estado useGumStore del archivo gumStore.tsx para manejar el estado relacionado con la producción, distribución y stock de chicles.

