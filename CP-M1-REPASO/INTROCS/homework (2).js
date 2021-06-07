// '110' = 1 x 2 ^ 2 + 1 x 2 ^ 1 + 0 x 2 ^ 0 = 4 + 2 + 0 = 6

function BinarioADecimal(num) {
  // tu codigo aca
  // var array = num.split(""); // ["1", "1", "0"]
  // var suma = 0;
  // for (var i = 0; i < array.length; i++) {
  //   suma = suma + Number(array[i]) * 2 ** (array.length - 1 - i)
  // }
  // return suma;

  // reduce (array)
  var array = num.split("");
  var sumaTotal = array.reduce(function(acum, elem, indice, arr) {
    return acum + Number(elem) * 2 ** (arr.length - 1 - indice);
  }, 0);
  return sumaTotal;
}

// 0 + 4 --> acum
// 4 + 2 --> acum
// .. --> acum = 7

// ["1", "1", "0"]

// Paso 0:
// suma = 0;
// i = 0;
// array[i] = "1"
// 0 + "1" * 2 ^ (3 - 1 - 0)
//
// Paso 1:
// suma = 4
// i = 1
// array[i] = "1"
// 4 + "1" * 2 ^ (3 - 1 - 1)

function DecimalABinario(num) {
  // tu codigo aca
  var binario = '';
  while(num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
  }
  return binario;
}

// 11 / 2 = 5.5 --> 5 (1) --> '1'
// 5 / 2  = 2.5 --> 2 (1) --> '11'
// 2 / 2  = 1   --> 1 (0) --> '011'
// 1 / 2 = 0.5  --> 0 (1) --> '1011'
// 0


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
