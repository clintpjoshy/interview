/* Better solution is the second method.
function checkPermutation() {
  var str1 = 'abcdd';
  var str2 = 'cdbaa';
  var arr = {};

  if (str1.length !== str2.length) {
        console.log('not permutation', 'length');
    return 'not permutation';
  } else {
    for (var i = 0; i < str1.length; i++) {
      if (!arr[str1[i]]) {
        arr[str1[i]] = 1;
      } else {
        arr[str1[i]] = arr[str1[i]]+ 1;
      }
    } 

    for (var i = 0; i < str2.length; i++) {
      if (arr[str2[i]] !== 0 && !arr[str2[i]]) {
        console.log('not permutation', 'extra');
        return 'not permutation';
      } else {
        arr[str2[i]] = arr[str2[i]] - 1;

        if (arr[str2[i]] < 0) {
        console.log('not permutation');
          return 'not permutation';
        }
      }
    }
  }
        console.log('permutation');
  return 'permutation';
}

checkPermutation();*/

//Better solution
var str1 = 'abcdd';
var str2 = 'cdbad';
var arr = 0;
function checkPermutation() {

  if (str1.length !== str2.length) {
        console.log('not permutation', 'length');
    return 'not permutation';
  } else {
    for (var i = 0; i < str1.length; i++) {
     arr = arr + str1.charCodeAt(i);
    }

    for (var i = 0; i < str2.length; i++) {
      arr = arr - str2.charCodeAt(i);
    }
  }

  if (arr !== 0) {
    console.log('not permutation');
    return 'not permutation';
  }

  console.log('permutation');
  return 'permutation';
}

checkPermutation();
