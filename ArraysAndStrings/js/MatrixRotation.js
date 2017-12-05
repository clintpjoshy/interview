var dArr = [
  [1, 2 , 3],
  [4, 5 , 6],
  [7, 8 , 9],
];
// row -----------
// col |
//     |
//     |
// here length of row is dArr[0].length and length of the col is dArr.length
function matrixRotation(arr) {
  if (!arr.length) {
    console.log('Matrix is empty.');
    return false;
  } else if (arr.length !== arr[0].length) {
    console.log('Matrix column and row length are not equal.');
    return false;
  }

  var arrLen = arr.length;
  var first = 0;	
  var last = 0;
  var offset = 0;
  var top = 0;
  for (var i = 0; i < arrLen / 2; i++) {
    first = i; 
    last = arrLen - 1 - i;
    for (var j = first; j < last; j++) {
      offset = j - first;	 
      top = arr[first][j]; //Save to a temp variable;

      arr[first][j] = arr[last - offset][first]; // replace first row with left
      arr[last - offset][first] = arr[last][last - offset]; // left by bottom
      arr[last][last - offset] = arr[j][last]; // bottom by right
      arr[j][last] = top; //right by temp
    }
  }
  console.log(arr);
  return true;
}

matrixRotation(dArr);
