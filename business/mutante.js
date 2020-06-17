function hasMutation(arrayDNA) {
  if (arrayDNA.length <= 0) {
    console.log('array invalido');
    return false;
  }
  var n = arrayDNA[0].length;
  var f = arrayDNA.length;
  var i = 0;
  while (i < f) {
    if (n != arrayDNA[i].length) {
      console.log('longitud invalida');
      return false;
    }
    arrayDNA[i] = arrayDNA[i].toUpperCase();
    i += 1;

    var min_lenght = 4;

    if (n < min_lenght) return false;
  }

  var counth = 0;
  var countv = 0;
  var countobl1 = 0;
  var countobl2 = 0;
  i = 0;

  while (i < n) {
    var j = 0;
    var hor = 1;
    var vert = 1;
    var obli11 = 1;
    var obli12 = 1;
    var obli21 = 1;
    var obli22 = 1;
    //check caracter valido
    while (j < n) {
      if (
        arrayDNA[i][j] != 'A' &&
        arrayDNA[i][j] != 'T' &&
        arrayDNA[i][j] != 'C' &&
        arrayDNA[i][j] != 'G'
      ) {
        console.log('caracter no soportado');
        return false;
      }

      //==============================
      // check horizontal  ------
      //==============================
      if (j + 1 < n && arrayDNA[i][j] == arrayDNA[i][j + 1]) {
        hor = hor + 1;
      } else {
        if (hor >= min_lenght) {
          counth = counth + 1;
        }
        hor = 1;
      }
      //==============================
      //   check vertical  ||||
      //==============================

      if (j + 1 < n && arrayDNA[j][i] == arrayDNA[j + 1][i]) {
        vert = vert + 1;
      } else {
        if (vert >= min_lenght) {
          countv = countv + 1;
        }
        vert = 1;
      }
      //==============================
      //check oblicua \
      //==============================

      if (j + i + 1 < n && arrayDNA[j][j + i] == arrayDNA[j + 1][j + i + 1]) {
        obli11 = obli11 + 1;
      } else {
        if (obli11 >= min_lenght) {
          countobl1 = countobl1 + 1;
        }
        obli11 = 1;
      }

      if (
        j + i > j &&
        j + i + 1 < n &&
        arrayDNA[j + i][j] == arrayDNA[j + i + 1][j + 1]
      ) {
        obli12 = obli12 + 1;
      } else {
        if (obli12 >= min_lenght) {
          countobl1 = countobl1 + 1;
        }
        obli12 = 1;
      }
      //==============================
      //check oblicua /
      //==============================

      if (
        n - 1 - j + i < n &&
        j + 1 < n &&
        arrayDNA[j][n - 1 - j + i] == arrayDNA[j + 1][n - 1 - j + i - 1]
      ) {
        obli21 = obli21 + 1;
      } else {
        if (obli21 >= min_lenght) {
          countobl2 = countobl2 + 1;
        }
        obli21 = 1;
      }

      if (
        i > 0 &&
        n - 1 - j - i - 1 >= 0 &&
        j + 1 < n &&
        arrayDNA[j][n - 1 - j - i] == arrayDNA[j + 1][n - 1 - j - i - 1]
      )
        obli22 = obli22 + 1;
      else {
        if (obli22 >= min_lenght) {
          countobl2 = countobl2 + 1;
        }
        obli22 = 1;
      }

      if (counth + countv + countobl1 + countobl2 > 1) return true;
      j = j + 1;
    }
    i = i + 1;
  }
  return false;
}

//======================================
//Valida solo el array del DNA en proceso
//======================================

function checkArrayDNA(arrayDNA) {
  if (arrayDNA.length <= 0) {
    console.log('array invalido');
    return false;
  }
  var n = arrayDNA[0].length;
  var f = arrayDNA.length;
  var i = 0;
  while (i < f) {
    if (n != arrayDNA[i].length) {
      console.log('longitud invalida');
      return false;
    }
    arrayDNA[i] = arrayDNA[i].toUpperCase();
    i += 1;

    var min_lenght = 4;

    if (n < min_lenght) return false;
  }

  i = 0;

  while (i < n) {
    var j = 0;
    // Comprueba caracteres
    while (j < n) {
      if (
        arrayDNA[i][j] != 'A' &&
        arrayDNA[i][j] != 'T' &&
        arrayDNA[i][j] != 'C' &&
        arrayDNA[i][j] != 'G'
      ) {
        console.log('caracter no soportado');
        return false;
      }
      j = j + 1;
    }
    i = i + 1;
  }
  return true;
}

module.exports = {
  hasMutation,
  checkArrayDNA,
};

// array = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']; //false
// array2 = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']; // true
// array3 = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']; // true
// array4 = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']; // true
// array5 = ['ATG', 'CAG', 'TTA', 'AGA', 'GCG', 'TCA']; // false
// console.log(hasMutation(array));

// console.log(hasMutation(array2));

// console.log(hasMutation(array3));
// console.log(hasMutation(array4));
// console.log(hasMutation(array5));
