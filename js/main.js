// ============================================================ //
// PRÁCTICA FUNCIONES                                           //
// Enunciado: 1.3.6-a-funciones.md (Ejercicios Prácticos 1 a 5) //
// Los resultados salen por la consola del navegador (F12).     //
// ============================================================ //


// ============ ejercicio 1 - SALUDAR ======= //

// Ejercicio 1: Saludo personalizado
// Crea una función llamada saludar que acepte un nombre como argumento
// y devuelva un mensaje de saludo como: "¡Hola, [nombre]!".

/**
 * Devuelve un saludo con el nombre que le pasamos.
 * Usa una plantilla con comillas invertidas para meter el nombre en la frase.
 * @param {string} diTunombre - Nombre de la persona a saludar.
 * @returns {string} El mensaje "¡Hola, nombre!".
 */
function saludar(diTunombre) {

    return `¡Hola, ${diTunombre}!`;

}

console.log(saludar("Héctor"));      // ¡Hola, Héctor!
console.log(saludar("Sebastián"));   // ¡Hola, Sebastián!
console.log(saludar("Maider"));      // ¡Hola, Maider!
console.log(saludar("Amparo"));      // ¡Hola, Amparo!


// ============ ejercicio 2 - SUMA ======= //

// Ejercicio 2: Suma de dos números
// Crea una función llamada suma que acepte dos números y devuelva la suma de estos.

/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} El resultado de a + b.
 */
function suma(a, b) {

    return a + b;
}

console.log(suma(10, 4));  // 14
console.log(suma(20, 5));  // 25
console.log(suma(5, 4));   // 9
console.log(suma(1, 5));   // 6
console.log(suma(-3, 3));  // 0, con negativos también funciona


// ============ ejercicio 3 - NÚMEROS PARES ======= //

// Ejercicio 3: Números pares
// Escribe una función llamada esPar que reciba un número
// y devuelva true si el número es par o false si es impar.

/**
 * Dice si un número es par.
 * Un número es par si el resto de dividirlo entre 2 es 0.
 * @param {number} num - Número a comprobar.
 * @returns {boolean} true si es par, false si es impar.
 */
function esPar(num) {

    return num % 2 === 0;
}

console.log(esPar(5));    // false
console.log(esPar(6));    // true
console.log(esPar(0));    // true, el 0 es par
console.log(esPar(-4));   // true
console.log(esPar(-3));   // false (el resto de -3 % 2 es -1, que no es 0)


// ============ ejercicio 4 - MAYOR DE TRES ======= //

// Ejercicio 4: Mayor de tres números
// Escribe una función llamada mayorDeTres que reciba tres números
// como argumentos y devuelva el número mayor.

/**
 * Devuelve el mayor de tres números usando Math.max.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @param {number} c - Tercer número.
 * @returns {number} El mayor de los tres.
 */
function mayorDeTres(a, b, c) {

    return Math.max(a, b, c);
}

console.log(mayorDeTres(7, 9, 6));   // 9
console.log(mayorDeTres(9, 7, 6));   // 9
console.log(mayorDeTres(9, 9, 6));   // 9, con empate también devuelve 9

// Lo mismo, pero sin Math.max, comparando con if / else if,
// por si el mayor es a, b o c.

/**
 * Devuelve el mayor de tres números usando if / else if.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @param {number} c - Tercer número.
 * @returns {number} El mayor de los tres.
 */
function mayorDeTresIf(a, b, c) {

    if (a >= b && a >= c) {          // ¿a gana a los DOS?
        return a;
    } else if (b >= a && b >= c) {   // si no, ¿b gana a los DOS?
        return b;
    } else {                         // si no, solo queda c
        return c;
    }
}

console.log(mayorDeTresIf(3, 5, 4));    // 5
console.log(mayorDeTresIf(6, 3, 5));    // 6
console.log(mayorDeTresIf(4, 3, 5));    // 5
console.log(mayorDeTresIf(2, 2, 2));    // 2, los tres iguales
console.log(mayorDeTresIf(-1, -5, -3)); // -1, con negativos


// ============ ejercicio 5 - CELSIUS A FAHRENHEIT ======= //

// Ejercicio 5: Conversión de grados Celsius a Fahrenheit
// Crea una función llamada celsiusAFahrenheit que convierta una temperatura
// de grados Celsius a Fahrenheit usando la fórmula: F = (C * 9/5) + 32.

/**
 * Convierte grados Celsius a grados Fahrenheit.
 * Se aplica la fórmula del enunciado: F = (C * 9/5) + 32.
 * @param {number} celsius - Temperatura en grados Celsius.
 * @returns {number} Temperatura en grados Fahrenheit.
 */
function celsiusAFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;
}

console.log(celsiusAFahrenheit(0));     // 32 (el agua se congela)
console.log(celsiusAFahrenheit(100));   // 212 (el agua hierve)
console.log(celsiusAFahrenheit(37));    // 98.6
console.log(celsiusAFahrenheit(-40));   // -40 (el punto donde las dos escalas coinciden)
