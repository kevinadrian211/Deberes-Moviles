DnDCharacter modela un personaje de Dungeons & Dragons (D&D):

Propiedades de la clase:

La clase tiene las siguientes propiedades de solo lectura:
strength, dexterity, constitution, intelligence, wisdom, charisma: Representan las características básicas de un personaje en D&D. Cada una de estas características se genera aleatoriamente al crear una instancia de la clase utilizando el método generateAbilityScore().
hitpoints: Representa los puntos de vida del personaje. Se calcula sumando 10 (un valor base) con el modificador de constitución del personaje, que se obtiene mediante el método getModifierFor().
Constructor:

En el constructor de la clase, se asignan valores aleatorios a cada una de las características del personaje utilizando el método generateAbilityScore().
Métodos estáticos:

generateAbilityScore(): Este método estático genera un puntaje de habilidad aleatorio. Utiliza cuatro tiradas de dados (de 1 a 6) y descarta la más baja. Luego suma las tres más altas y devuelve el resultado. Esto simula la forma en que se generan los puntajes de habilidad en D&D, donde se lanzan cuatro dados de seis caras y se descarta el más bajo.
getModifierFor(): Este método estático calcula el modificador de habilidad para un valor numérico dado. En D&D, los modificadores se calculan restando 10 del valor, dividiendo el resultado entre 2 y redondeando hacia abajo. Este método implementa esa lógica.
Método privado:

generateRandomDiceRollScore(): Este método privado genera un valor aleatorio entre 1 y 6, simulando el lanzamiento de un dado de seis caras.