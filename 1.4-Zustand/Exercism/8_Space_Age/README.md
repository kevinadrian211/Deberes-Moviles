AgeCalculator, calcula la edad de una persona en años según la cantidad de segundos ingresados y el planeta seleccionado. Aquí tienes una descripción de cómo funciona:

useState: Se utilizan los hooks de estado useState para manejar el estado de tres variables: seconds, planet, y age. seconds almacena la cantidad de segundos ingresados por el usuario, planet almacena el planeta seleccionado, y age almacena la edad calculada.

RATIOS: Es un objeto que almacena los factores de conversión de la edad de una persona en la Tierra a la edad en otros planetas del sistema solar. Cada clave del objeto corresponde al nombre de un planeta, y el valor asociado es el factor de conversión.

calculateAge: Esta función se activa cuando se hace clic en el botón "Calculate Age". Utiliza el factor de conversión del planeta seleccionado para calcular la edad en años, a partir de la cantidad de segundos ingresados. Luego actualiza el estado age con el valor calculado.

handleSecondsChange: Se activa cada vez que el usuario cambia el valor del input de segundos. Actualiza el estado seconds con el nuevo valor ingresado.

handlePlanetChange: Se activa cada vez que el usuario selecciona un planeta diferente en el dropdown. Actualiza el estado planet con el nuevo planeta seleccionado.

Renderizado: El componente renderiza un formulario con un input para ingresar los segundos y un dropdown para seleccionar el planeta. Cuando el usuario hace clic en el botón "Calculate Age", se muestra la edad calculada en el planeta seleccionado.