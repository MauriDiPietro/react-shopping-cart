// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeowrks no es necesario que los vuelvan a definir.

const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');

// ----------------------

// ----- Recursión -----

// EJERCICIO 1
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array){

    function aplanadoraReloaded(array, arrayEntero) {
        if (!arrayEntero) var arrayEntero = []
    
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                aplanadoraReloaded(array[i], arrayEntero)
            } else {
                arrayEntero.push(array[i])
            }
        }
    
        return arrayEntero;
    } 
    var arrayResultante = aplanadoraReloaded(array);
    var sumatoria = 0
    for (let i = 0; i < arrayResultante.length; i++){
        sumatoria= sumatoria +  arrayResultante[i];
    }
    return sumatoria;

}


// EJERCICIO 2
// Secuencia inventada: f(n) = (f(n-1) + f(n-2) + f(n-3)) x 2
// Donde las primeras tres posiciones son dadas por el array recibido por parametro y a partir de
// la siguiente se calcula como la suma de los 3 números anteriores multiplicados por dos.
// array es un arreglo de 3 posiciones que puede contener números o strings, aquellas posiciones que
// sean números debemos dejarlas tal cual están pero las que tengan strings debemos calcular su cantidad
// de caracteres para usarlos en la secuencia.
// Por ejemplo si recibimos: ["Franco", 1, "Henry"] deberíamos tener los siguientes 3 valores iniciales
// de la secuencia f(0) = 6, f(1) = 1 y f(2) = 5 (Ya que "Franco" tiene 6 caracteres y "Henry", 5)
// A partir de ahí la cuarta posición sería  (6 + 1 + 5) * 2 = 24 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el array
// antes mencionado:
// secuencia: 6, 1, 5, 24, 60, 178, 524
// secuenciaHenry(0) // 6  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 1 ya que el elemento de la posición 1 es 1
// secuenciaHenry(6) // 524 ya que el elemento de la posición 6 es 524
// Para números negativos de n debe devolver false

var array = ["Franco", 1, "Henry"];

function secuenciaHenry(array, n) {
  // Tu código aca:
  if(n < 0){
    return false;
  }
  let arrayNumerico = [];
  
  
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === 'string'){
      arrayNumerico.push(array[i].length)
    }else {
      arrayNumerico.push(array[i]);
    }
  }
  if(n < 3){
    return arrayNumerico[n];
}
  return (secuenciaHenry(array, n-3) + secuenciaHenry(array, n-2) + secuenciaHenry (array, n-1) ) * 2;
}



// ---------------------

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function(){
  // Tu código aca:
  
  let current = this.head;
  let previous = null;
  let size = 0;
  if(this.head === null){
    return 0;
  }
  while (current != null) {  // iteramos mientras current exista
  
    size++;
    previous = current;
    current = current.next;
  }
  return size;

}


// EJERCICIO 4
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function(pos){
  // Tu código aca:
  let current = this.head;
  let previous = null;
  let size = 0;
  
  while (current != null) {  // iteramos mientras current exista
  
    size++;
    previous = current;
    current = current.next;
  }

  if(pos <0 || pos > size || this.head === null){
    return false;
};

current = this.head;
previous = null;

if (pos === 0){
    this.head = current.next;
} else {
    for (let i = 0; i < pos; i++){
        previous = current; 
        current = current.next;
    };
    previous.next = current.next;
    
};
return current.value;
}

// EJERCICIO 5
// Implementar la función orderLinkedList que ordene los elementos de la lista pasada por parámetro
// y retorne una nueva lista con dichos elementos ya ordenados.
// Ejemplo:
//    Lista original: Head --> 4 --> 13 --> 1 --> 10 --> null
//    Lista nueva luego de aplicar el order: Head --> 1 --> 4 --> 10 --> 13 --> null
// IMPORTANTE: Pueden usar algun método de ordenamiento ya visto para tener un arreglo ordenado y a
// partir de él construir la nueva lista ordenada

LinkedList.prototype.toArray = function(){
  let array = [];
  let current = this.head;
  while(current){
      array.push(current.value)
      current = current.next;
  }
  return array;
}

LinkedList.prototype.fromArray = function(array){
  array.forEach(value => this.add(value));
  return this;
}

var orderLinkedList = function(linkedList){
  // Tu código aca:
  
  let newArray = linkedList.toArray();
  let aux = 0;
  for (let i = 0; i < newArray.length-1; i++){
      for (let j = 0; j < newArray.length-1; j++){
          if(newArray[j] > newArray[j+1]){
          aux = newArray[j]; //Aca se guarda la variable para que j no se pierda
          newArray[j] = newArray[j+1]
          newArray[j+1] = aux;
      }
  }
  
  }
  let newList = new LinkedList;
  newList.fromArray(newArray);
  return newList;
}


// ----------------------


// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar

var controlAcces = function(queue, event){
  // Tu código aca:
   

}

// ---------------


// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function(array){

  let arrayOrd = array.sort()
  
  function atravesar(array,start,end){
    if(start>end){                        
        return null;
    }
    let mid = Math.floor((start+end)/2);       
    let raiz = new BinarySearchTree(array[mid]);     
    raiz.left = atravesar(array,start,mid-1);    
    raiz.right = atravesar(array,mid+1,end);     
    return raiz;                               
}

  return atravesar(arrayOrd,0,arrayOrd.length-1);
}


// ---------------


// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]


var binarySearch = function (array, target) {
  // Tu código aca:
  let min = 0;
  let max = array.length - 1;
  if(max < min || target > (max + 1)){
        return -1;
      }
    
  let guess = 0;
  if(array[guess] === target){
      return guess;
    }
    
  while(array[guess] != target){
    
      guess = Math.ceil((min + max) / 2);
      if(array[guess] === target){
          return guess;
      }
      if(array[guess] < target){
          min = guess + 1;
          } else{
              max = guess - 1;
              }
  }
  return guess;

}

/ EJERCICIO 9
// Ordená un arreglo de números usando un bubble sort pero con algunas particularidades.
// El nuevo arreglo debe ser devuelto.
// El algortimo va a recibir un arreglo de objetos de la siguiente forma:
// {
//   name: "Notebook",
//   price: 1200,
//   review: 8
// }
// Esos objetos deben ser ordenados en función de lo que indique los siguientes parámetros
// "firstOrd", "secondOrd" los cuales van a tener alguna de las propiedades del objeto anterior
// para saber cual va a ser la que debemos tomar para el ordenamiento. La "secondOrd" se usa en los
// casos en los cuales para la "firstOrd" tengan el mismo valor.
// var array = [
//   {name: "Notebook", price: 1200, review: 8},
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 1:
// specialSort(array, "price") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "Notebook", price: 1200, review: 8}
//   {name: "PS5", price: 1200, review: 7}
// ]
// Ejemplo 2:
// specialSort(array, "price", "review") --> Debería quedar:
// [
//   {name: "Smartphone", price: 300, review: 9},
//   {name: "TV", price: 800, review: 1},
//   {name: "PS5", price: 1200, review: 7},
//   {name: "Notebook", price: 1200, review: 8}
// ]
// (Siempre el ordenamiento es de menor a mayor sea cual fuera la propiedad indicada para el orden)


var specialSort = function(array, firstOrd, secondOrd) {
  // Tu código aca:
  for (let i = 0; i < array.length-1; i++){
           for (let j = 0; j < array.length-1; j++){
               if(array[j][firstOrd] > array[j+1][firstOrd]){
               aux = array[j]; //Aca se guarda la variable para que j no se pierda
               array[j] = array[j+1]
               array[j+1] = aux;
           }
       }
  }

  if(secondOrd){
    for (let i = 0; i < array.length-1; i++){
        for (let j = 0; j < array.length-1; j++){
            if(array[j][secondOrd] > array[j+1][secondOrd] && array[j][firstOrd] > array[j+1][firstOrd]){
            aux = array[j]; //Aca se guarda la variable para que j no se pierda
            array[j] = array[j+1]
            array[j+1] = aux;
        }
    }
}
  }

  return array;
}