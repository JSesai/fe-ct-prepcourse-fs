/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
const nuevObjeto = {};

for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if(nuevObjeto[element]){
        nuevObjeto[element]++;
    }else{
        nuevObjeto[element] = 1;
    }
}

const clavesOrdenadas = Object.keys(nuevObjeto).sort(); //object keys construye un array al pasarle un objeto objeto en array ordena alfabeticamente el metodo sort
const objetoOrdenado = {};
for (let i = 0; i < clavesOrdenadas.length; i++) {
    const clave = clavesOrdenadas[i];
    objetoOrdenado[clave] = nuevObjeto[clave];
}
   return objetoOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const palabraArray = string.split(''); //array de letras del string 
   const aMayusculas = palabraArray.filter( letra => letra === letra.toUpperCase()); //filtra mayus 
   const aMinusculas = palabraArray.filter(letra => letra === letra.toLowerCase()); //filtra minus
   const uneMayusMinus = aMayusculas.concat(aMinusculas).join(''); //Concatena mayus con minus y las une en un solo string
   return uneMayusMinus; 

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabraArray = frase.split(' '); //array de letras del string 
   const palabrasInvertidas = palabraArray.map(palabra => palabra.split('').reverse().join(''));
   const fraseInvertida = palabrasInvertidas.join(' ');
   return fraseInvertida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   const stringNumero = String(numero); //convertir numero en string
   const stringInvertido = stringNumero.split('').reverse().join(''); //invertir el sentido
   
   if (stringNumero === stringInvertido) { //evaluar si son iguales de manera normal e invertido
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
       
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const expReg = /[abc]/gi;
   const nuevoString = string.replace(expReg, '');
   return nuevoString;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   //El metodo sort es un metodo de ordenamiento que evalua a y b 
   const arrayOrdenadoPorLongitud = arrayOfStrings.sort((a, b) => a.length - b.length);
   return arrayOrdenadoPorLongitud;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const interseccion = array1.filter((element) => array2.includes(element));
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
