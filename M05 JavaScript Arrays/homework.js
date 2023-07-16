/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   const ultimo = Number(array.length) -1;

   return array[ultimo];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map(item=> item +1);
   
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  
   return palabras.join(' ');
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // let result = 0;
   // arrayOfNums.forEach((element, index) => {
   //  if(index < arrayOfNums.length){
   //  result += arrayOfNums[index];
   //  }
   // });
   // return result;

   //sintaxis ecma 5 ******* 
   // const suma = arrayOfNums.reduce( function(acumulador,elemento){
   //    return acumulador + elemento;
   // },0 );
   //sintaxis ecma 5 *******

   //sintaxis ecma6 
   const suma = arrayOfNums.reduce( (acumulador,elemento) =>acumulador + elemento,0 )
    
   return suma;
  
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   //codigo imperativo----------------
   // let acumulador = 0;
   // for (let i = 0; i < resultadosTest.length; i++) {
   //    acumulador += resultadosTest[index];
        
   // }
   // return(acumulador/resultadosTest.length);
   //------------------------------
   //sintaxis ecma 5 *******
   // const sumaElementosArray = resultadosTest.reduce( function(acumulador, elemento){
   //    return acumulador += elemento;
   // }, 0);
   // const promedio = sumaElementosArray/resultadosTest.length;
   // return promedio;
   //*************************

   //sintaxis ecma6 
   const sumaElementosArray = resultadosTest.reduce( (acumulador, elemento)=> acumulador += elemento,0);
   return (sumaElementosArray/resultadosTest.length); 


}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   //imperativo time (21 ms) --------------
   //   let acumulador = 0;
   //   for (let i = 0; i < arrayOfNums.length; i++) {
   //       if(arrayOfNums[i] > acumulador){
   //          acumulador = arrayOfNums[i];
   //       }
   //    }
   //  return(acumulador); ------------------
      
   // Ecma 5 -------
   // const numMayor = arrayOfNums.reduce( function (aux, element) {
   //   if(element > aux){
   //     aux = element;
   //   }
   //   return aux;
   // },0);
   //  return (numMayor);
   // }

   //ecma 6
   const numMayor = arrayOfNums.reduce( (aux, element) => element > aux ? element : aux ,0);
   return numMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
    }
    
    if (arguments.length === 1) {
      return arguments[0];
    }
    
    return Array.from(arguments).reduce((acumulador, valor) => acumulador * valor);
  
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   //ecma 5 ------------
//    const numMayorCuantos = arreglo.reduce( (aux, element) =>{
    
//       if(element > 18){
//           aux ++;
//       } 
//       return aux;
//   },0);
//   return aux; ----------------------

//ecma 6
   const numMayorCuantos = array.reduce( (aux, element) => element > 18 ? aux + 1 : aux ,0);
   return numMayorCuantos;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   const dias = [,'Domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'Sábado'];
   // if(dias[numeroDeDia] == dias[1] || dias[numeroDeDia] == dias[7] ){
   //    return 'Es fin de semana';
   // }else{
   //    return "Es dia laboral"
   // };
   return (dias[numeroDeDia] == dias[1] || dias[numeroDeDia] == dias[7] ) ? 'Es fin de semana' : "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   
   const numConvertidoStr = num.toString();
   return numConvertidoStr.charAt(0) == '9' ? true : false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   const evalua = array.every( itemArray => itemArray == array[0]);
   return evalua;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
   const nuevoArray = array.filter( itemArray => mesesPedidos.includes(itemArray));
      
   if (mesesPedidos.length == nuevoArray.length){
      return nuevoArray;
   } else {
      return "No se encontraron los meses pedidos";
   }

 
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let result = [];
   const tabla = 6;
   for (let i = 0; i < 11; i++) {
      result.push(tabla * i);
   }
   return(result);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter( element => element>100);

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let result = [];
   //let num = 23
  for (let i = 0; i < 10; i++) {
      if(num == i){
         result = "Se interrumpió la ejecución";
         break;
      }else{
        num = num +2;
         result.push(num);
      }
   }
   return(result);

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let result = [];
   
  for (let i = 0; i < 10; i++) {
      if(i == 5){
          continue;
        }
        num += 2;
        result.push(num);
        
   }
   return result;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
