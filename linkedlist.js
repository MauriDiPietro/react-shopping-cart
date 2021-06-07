function Node(valor){ // recibe 1 valor que va a ser igu
    this.value = valor;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(valor) {
    var nuevoNodo = new Node(valor);
  
    if(!this.head){
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      
      tailActual.next = nuevoNodo;
    }
}

LinkedList.prototype.remove = function() {
    if(!this.head){
      return undefined;
    }
  
    if(this.head.next === null){
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
}

LinkedList.prototype.search = function(arg) {
    var nodoActual = this.head;
  
    if(nodoActual === null){
      return null;
    }
  
    while (nodoActual !== null) {
      if(typeof arg === "function"){
        if(arg(nodoActual.value)){
          return nodoActual.value;
        }
      } else if(nodoActual.value === arg){
          return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
}

LinkedList.prototype.size = function(){
    var tamaño = 1;

    if(!this.head) {return 0}
      else{ 
      var nodoActual = this.head;
      while (nodoActual.next !== null) {
        nodoActual = nodoActual.next; 
        tamaño++; 
      }
    }
    return tamaño;
};
//this.head => node  = node.next => node = node.next => node = node.next => null 
//this.head =>                      node = node.next
                                      
//actual = node(3).next = node(4)
//anterior = node(2) node(2).next = node(4)

LinkedList.prototype.removeFromPos = function (indice){
    if(indice < 0 || indice > this.size()){
        return false;
    }
    let Actual = this.head;
    let Anterior = null;
    if (indice === 0){
        this.head = Actual.next;
    } else {
        for (let i= 0; i < indice; i++){
            Anterior = Actual;
            Actual = Actual.next;
        }
        Anterior.next = Actual.next;
    }
    return Actual.value;
}

//esta es una mini funcion que devuelve una copia de una lista pasada por argumento
var copyLinkedList = (lista)=>{
  var newList = new LinkedList()
  for(let actual = lista.head; actual !== null; actual = actual.next){
    newList.add(actual.value)
  }
  return newList
}

//esta funcion, sin destruir la lista original 
var orderListWOD = function(linkedList){
  var listaDesordenada = copyLinkedList(linkedList)
  var listaOrdenada = new LinkedList()
  while (listaDesordenada.head !== null){
    var actual = listaDesordenada.head
    var valorMenor = actual.value
    var posMenor = 0
    for(let i = 0; i<listaDesordenada.size();i++){
      if(actual.value < valorMenor){
        valorMenor = actual.value
        posMenor = i
      }
      actual = actual.next
    }
    listaOrdenada.add(valorMenor)
    listaDesordenada.removeFromPos(posMenor)
  }
  return listaOrdenada
}


//esta vercion destrulle la lista original
var orderLinkedList = function(lista){
  var listaOrd = new LinkedList()
  for(var actual = lista.head; lista.head !== null; actual = lista.head){
    var valorMenor = lista.head.value
    var posMenor = 0
    for(let j = 0; j<lista.size(); j++){
      if(actual.value < valorMenor){
        valorMenor = actual.value
        posMenor = j
      }
      actual = actual.next
    }
    listaOrd.add(valorMenor)
    lista.removeFromPos(posMenor)
  }
  return listaOrd
}



var linkedList = new LinkedList();

linkedList.add(4);
linkedList.add(13);
linkedList.add(1)
linkedList.add(10)
console.log(linkedList)
var orderedListWOD = orderListWOD(linkedList);
console.log(orderedListWOD)
var orderedList = orderLinkedList(linkedList);
console.log(orderedList)
console.log(linkedList)