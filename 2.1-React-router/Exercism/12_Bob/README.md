Descripción General

  - El ejercicio de Bob simula un bot de respuestas. Este ejercicion busca analizar el mensaje que ingresa el usuario y regresa una respuesta en base al texto. El ejercicio se basa en si el mensaje es una pregunta, un grito, ambos o ninguno.

Estructura del Proyecto

   - HeyComponent.tsx - Componente que contiene toda la lógica del análisis del mensaje y la interfaz de usuario para la entrada del mensaje y la visualización de la respuesta.
   - App.tsx - Componente principal que utiliza HeyComponent y actúa como punto de entrada de la aplicación.
Funcionalidad del Código

  Componente HeyComponent
     - El componente HeyComponent es responsable de manejar la entrada del usuario y generar una respuesta basada en la lógica definida. Este componente realiza las siguientes funciones:

     Estado del Componente:

       - message: Almacena el mensaje ingresado por el usuario.
       - response: Almacena la respuesta generada basada en el mensaje del usuario.
    Lógica de Respuesta:

       - El componente define un arreglo de posibles respuestas.
       - La función hey procesa el mensaje ingresado, eliminando los espacios en blanco al inicio y al final del mensaje.
       - La función hey evalúa el mensaje para determinar si es una pregunta (termina con ?), un grito (todas las letras están en mayúsculas), ambos o ninguno.
       - Basado en esta evaluación, la función hey selecciona y devuelve una respuesta del arreglo de respuestas.
    Interacción con el Usuario:

       - El componente renderiza un campo de entrada de texto donde el usuario puede escribir su mensaje.
       - Un botón que, al ser presionado, llama a la función hey con el mensaje ingresado y actualiza el estado de la respuesta.
       - Un párrafo que muestra la respuesta generada.
Componente App
   - El componente App es el componente principal de la aplicación. Su función es simple pero crucial:

     - Renderiza un encabezado para la aplicación.
     - Incluye el componente HeyComponent para manejar la funcionalidad principal del análisis de mensajes.
Uso de la Aplicación

   - El usuario ingresa un mensaje en el campo de texto.
   - El usuario presiona el botón "Send".
   - La aplicación analiza el mensaje y muestra la respuesta adecuada debajo del campo de entrada.
Respuestas Posibles

   - Mensaje vacío: "Fine. Be that way!"
   - Pregunta: "Sure."
   - Grito: "Whoa, chill out!"
   - Pregunta y Grito: "Calm down, I know what I'm doing!"
   - Ninguna condición especial: "Whatever."