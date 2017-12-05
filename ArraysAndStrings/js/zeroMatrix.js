var dArr = [
  [1, 2, 3],
  [1, 2, 0],
  [1, 0, 3],
  [1, 2, 3]
];
/* m = |
       |
       |
*/

/* n = ----- */
function zeroMatrix(arr) {
  if (!arr.length) {
    cosole.log('Matrix is empty');
    return;
  } else {
    var rowLen = arr[0].length;
    for (var i = 1, iLen = arr.length; i < iLen; i++) {
      if (arr[i].length !== rowLen) {
        console.log('Given value is not a matrix');
        return;
      }
    }
  }

//(m, n)
  var rowZero = false;
  var colZero = false;
  var n = arr[0].length;
  var m = arr.length;

//Check if any element in row 0 is 0
  for (var j = 0; j < n; j++) {
    if (arr[0][j] === 0) {
      rowZero = true;
      break;
    }
  }

//Check if any element in col 0 is 0
  for (var i = 0; i < m; i++) {
    if (arr[i][0] === 0) {
      colZero = true;
      break;
    }
  }

//Check other rows and cols
  for (var k = 1; k < m; k++) {
    for (var l = 1; l < n; l++) {
      if (arr[k][l] === 0) {
        arr[k][0] = 0;
        arr[0][l] = 0;
      }
    }
  }

//Now check the first row and col and modify that row and col
  for (var o = 1; o < n; o++) {
    if (arr[0][o] === 0) {
      nullify(arr, o, 'col');
    }
  }

  for (var p = 1; p < m; p++) {
    if (arr[p][0] === 0) {
      nullify(arr, p, 'row');
    }
  }

//Check if first row and col had any 0 prior to modification

  if (rowZero) {
    nullify(arr, 0, 'col');
  }

  if (colZero) {
    nullify(arr, 0, 'row');
  }
  console.log(arr);
  return true;
}

function nullify(arr, i, rowCol) {
  var n = arr[0].length;
  var m = arr.length;
  var len = rowCol === 'row' ? n : m;

  for (var k = 0; k < len; k++) {
    if (rowCol === 'row') {
      arr[i][k] = 0;
    } else {
      arr[k][i] = 0;
    }
  }
}

zeroMatrix(dArr);
