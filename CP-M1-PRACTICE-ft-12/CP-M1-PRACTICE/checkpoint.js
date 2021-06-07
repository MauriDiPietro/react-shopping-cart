// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las 
// implementaciones ya realizadas en las homeworks de 
// Queue, LinkedList y BinarySearchTree.
// Sobre dichas implementaciónes van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo.
// Pero todos los métodos ya implementados en las homeowrks no es 
// necesario que los vuelvan a definir.

const {
    Queue,
    BinarySearchTree
} = require('./DS.js');

// ----- Closures -----

// EJERCICIO 1
// Implementar la funcion 'exponencial' que recibe un parametro entero 'exp'
// y retorna una una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'exponencial' como la funcion padre, la funcion hija debe de recibir 
// un parametro y retornar dicho parametro elevado al parametro 'exp' de 
// la funcion padre original 'exponencial'
// Ejemplo:
// > var sqrt = exponencial(2);
// > sqrt(2);
// < 4
// > sqrt(3);
// < 9
// > sqrt(4);
// < 16

function exponencial(exp) {
    return function(base){      //retorna function para que haga closure
        return Math.pow(base, exp)  //la function calcula base * exp
} 
}
// ----- Recursión -----

// EJERCICIO 2
// Crear la funcion 'direcciones':
// La funcion debe retornar un string de los movimientos Norte(N), Sur(S), Este(E), Oeste(O)
// que se deben realizar, para llegar al destino de un laberinto dado.
//
// Ejemplo: dado el siguiente laberinto:
// let laberintoExample = {
//     N: 'pared',
//     S: {
//         N: 'pared',
//         S: 'pared',
//         E: {
//             N: 'destino',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         },
//         O: {
//             N: 'pared',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         }
//     },
//     E: 'pared',
//     O: 'pared'
// }
// El retorno de la funcion 'direcciones' debe ser 'SEN', ya que el destino se encuentra
// haciendo los movimientos SUR->ESTE->NORTE
// Aclaraciones: el segundo parametro que recibe la funcion ('direccion') puede ser pasado vacio (null)

function direcciones(laberinto, direccion = "") {
//si es pared el valor de la key, no entramos
//entramos donde la key sea un objeto o destino
if (!laberinto) return direccion;   //si no entra en laberinto
for (let key in laberinto) {  //itera por cada key de objeto
    if(laberinto[key] ==='laberinto') {

    }
    if (typeof laberinto[key] === 'object') {//si el value de la key es un objeto
       direccion += key; // var donde se guarda el camino
        return direcciones(laberinto[key], direccion) //
    }    
}
return direccion
}



// EJERCICIO 3
// Crea la funcion 'deepEqualArrays':
// Dado que las comparaciones en javascript aveces son un problema como con el siguiente ejemplo:
// [0,1,2] === [0,1,2] => false // puede probarlo en la consola
// con objetos o arrays identicos surge la necesidad de comparar en 'profundidad' arrays u objetos
// en este caso la funcion solo va a ser pensada para recibir arrays,
// pero estos pueden tener multiples niveles de anidacion, y la funcion deepEqualArrays debe
// comparar cada elemento, sin importar la profundidad en la que este
// Ejemplos: 
// deepEqualArrays([0,1,2], [0,1,2]) => true
// deepEqualArrays([0,1,2], [0,1,2,3]) => false
// deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true

function deepEqualArrays(arr1, arr2) { //va comparando [i] de arr1 con [i] de arr2
if (arr1.length !== arr2.length) return false; //comparar longitud de los arrays
for (let i=0;i<arr1.length;i++) {               //recorrer arr1
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {  //si el elemento[i] es un array, hago recursividad
return deepEqualArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) return false;  //si no es array, se va a preguntar si los elementos son distintos
}
return true;
}

// ----- QUEUE -----

// EJERCICIO 4
// Implementar la funcion multiCallbacks:
// la funcion multiCallbacks recibe dos arrays de objetos cuyas propiedades son dos,
// 'cb' que es una funcion, y 'time' que es el tiempo estimado de ejecucion de dicha funcion 
// este ultimo representado con un integer como se muestra acontinuacion:
// let cbsExample = [
//     {cb:function(){}, time: 2},
//     {cb:function(){}, time: 3}
// ]
// De manera que lo que nuestra funcion 'multiCallbacks' debe de ir ejecutando las funciones 
// sin pasarle parametros pero debe ir alternando las funciones de cbs1 y cbs2 
// segun cual de estas se estima que tarde menos, retornando un arreglo de resultados
// de las mismas en el orden que fueron ejecutadas
// Ejemplo:
// > let cbs1 = [
//       {cb:function(){return '1-1'}, time: 2},
//       {cb:function(){return '1-2'}, time: 3}
//   ];
// > let cbs2 = [
//       {cb:function(){return '2-1'}, time: 1},
//       {cb:function(){return '2-2'}, time: 4}
//   ];
// > multiCallbacks(cbs1, cbs2);
// < ["2-1", "1-1", "1-2", "2-2"];

function multiCallbacks(cbs1, cbs2){
    let callbacks = cbs1.concat(cbs2).sort(function(elementA, elementB) {  //ordena de menor a mayor por la propiedad time
        return elementA.time - elementB.time;
    })
    let results = []
    for (let i= 0; i< callbacks.length;i++) { //iterar por cada cb
        result.push(callbacks[i].cb())  //pushear
    }
    return results
}



// ----- BST -----

// EJERCICIO 5
// Implementar el metodo 'toArray' en el prototype del BinarySearchTree
// que devuelva los valores del arbol en una array ordenado
// Ejemplo:
//     32
//    /  \
//   8   64
//  / \
// 5   9
// resultado:[5,8,9,32,64]

BinarySearchTree.prototype.toArray = function(current = this, arr= []) {
    if (!current) {
        return []
    }
    this.toArray(current.left, arr)
    arr.push(current.value)
    this.toArray(current.right, arr)
    return arr;   
}
//dfs - recorre el arbol in-order
//var arbol = new BinarySearchTree(5)
//arbol.insert(4)
//arbol.insert(8)
//arbol.toArray()


// ----- Algoritmos -----

// Ejercicio 6
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan 
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

function primalityTest(num) {
    if (num <= 3) return num > 1;
  
    if ((num % 2 === 0) || (num % 3 === 0)) return false;
    
    let count = 5;
    
    while (Math.pow(count, 2) <= num) {
      if (num % count === 0 || num % (count + 2) === 0) return false;
      
      count += 6;
    }
    
    return true;
  
}


// EJERCICIO 7
// Implementa el algoritmo conocido como 'quickSort', que dado un arreglo de elemntos
// retorn el mismo ordenado de 'mayor a menor!'
// https://en.wikipedia.org/wiki/Quicksort

function quickSort(array) {

}




// ----- EXTRA CREDIT -----

// EJERCICIO 8
// Implementa la función 'reverse', que recibe un numero entero como parametro
// e invierte el mismo.
// Pero Debería hacer esto sin convertir el número introducido en una cadena, o un array
// Ejemplo:
// > reverse(123);
// < 321
// > reverse(95823);
// < 32859

function reverse(num, lastNum=0){

}

module.exports = {
    exponencial,
    direcciones,
    deepEqualArrays,
    multiCallbacks,
    primalityTest,
    quickSort,
    reverse,
    Queue,
    BinarySearchTree
}
