function isRotate(str1, str2) {
  if (str1.length !== str2.length) {
    console.log('Not a rotation');
    return false;
  }

  var combinedStr = str1 + str1;
  console.log(combinedStr.includes(str2));
  return combinedStr.includes(str2);
}

isRotate('Waterbottle', 'erbottleWat');
//This is case sensitive. If case in not very important convert both to one case.
