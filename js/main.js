// ============ ejercicio 1 - SALUDAR - ======= //

//Ejercicio 1: Saludo personalizado//


function saludar(diTunombre) {

    return `Buenas noches, ${diTunombre}`

}
    
console.log(saludar("Héctor"))
console.log(saludar("Sebastián"))
console.log(saludar("Maider"))
console.log(saludar("Amparo"))

// Ejercicio 2: Suma de dos números //

// Crea una función llamada suma que acepte dos números y devuelva la suma de estos. //

function suma(a, b) {

        return a + b;
}

console.log(suma(10, 4));  // 14
console.log(suma(20, 5));  // 25
console.log(suma(5, 4));  // 9
console.log(suma(1, 5));  // 6

// Ejercicio 3: Números pares Escribe una función llamada esPar que reciba un número
//  y devuelva true si el número es par o false si es impar.

function esPar(num) {

    return num % 2 === 0;
}

console.log(esPar(5));    // False
console.log(esPar(6));    // true

// Ejercicio 4: Mayor de tres números Escribe una función llamada mayorDeTres
// que reciba tres números como argumentos y devuelva el número mayor.

function mayorDeTres(a,b,c) {
    
    return Math.max(a, b, c);
}

console.log(mayorDeTres(7,9,6));
console.log(mayorDeTres(9,7,6));
console.log(mayorDeTres(9,9,6));

// siendo a o no el mayor

function mayorDeTresIf(a, b, c) {

    if (a >= b && a >= c) {          // ¿a gana a los DOS?
        return a;
    } else if (b >= a && b >= c) {   // si no, ¿b gana a los DOS?
        return b;
    } else {                         // si no, solo queda c
        return c;
    }
}

console.log(mayorDeTres(3,5,4));
console.log(mayorDeTres(6,3,5));
console.log(mayorDeTres(4,3,5));