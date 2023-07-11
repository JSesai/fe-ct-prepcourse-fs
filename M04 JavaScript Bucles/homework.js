/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   return x > y ? x : (x < y ? y : x);
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   return edad >= 18 ? 'Allowed' : 'Not allowed';  

}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   return status == 1 ? 'Online' : (status == 2 ? 'Away' : 'Offline');
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   let salud;
   switch (idioma){
      case 'aleman' :
         salud = 'Guten Tag!';
      break;
      case 'mandarin' :
         salud = 'Ni Hao!';
      break;
      case 'ingles' :
         salud = 'Hello!';
      break;
      default:
         salud = 'Hola!';
         break;
         
   }
   return salud;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   let seleccion;
   switch(color){
      case "blue":
         seleccion = "This is blue"
         break;
      case "red":
         seleccion = "This is red"
         break;
      case "green":
         seleccion = "This is green"
         break;
      case "orange":
         seleccion = "This is orange"
         break;
      default:
         seleccion = 'Color not found';
   }
   return seleccion;
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   return num == 10 ? true : (num == 5 ? true : false);
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   return num < 50 && num > 20 ? true : false;
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   return Number.isInteger(num);
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   let result;
   if (num % 3 == 0 && num % 5 == 0){
      result = "fizzbuzz";
   }else if(num % 3 == 0){
      result = "fizz";
   }else if(num % 5 == 0){
      result = "buzz";
   }else{
      result = false;
   }
   return result;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   
   let result;
   if(num1 > 0 && num1 > num2 && num1 > num3){
      result = 'Numero 1 es mayor y positivo';
   }else if(num1 < 0 || num2 < 0 || num3 < 0){
      result = 'Hay negativos';
   } else if(num3 > num1 && num3 > num2){
      num3++;
      result = num3; 
   } else if(num1 == 0 && num2 == 0 && num3 == 0){
      result = 'Error';
   }else{
      result = false;
   }
   return result;

}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num <= 1){
      return false;
   }
   for(let i = 2; i < num; i++ ){
      if(num % i === 0){
         return false;
      }
   }
   return true;

}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   return valor == true ? "Soy verdadero" : "Soy falso";
}
function tieneTresDigitos(num) {

   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   return num.toString().length == 3 ? true : false ;
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let conta = 0;
   do{
      num += 5;
      conta ++;
   }while(conta < 8);

   return num;
   

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
