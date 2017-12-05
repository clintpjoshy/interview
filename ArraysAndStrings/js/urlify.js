function urlify() {
  var str = 'Mr John smith     ';
  var str1 = '';

  for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
    if (str.charCodeAt(i) === 32) { //str[i] === ' ' works too.
      str1 = str1 + '%20';
    } else {
    str1 = str1 + str[i];
    }
  }
  console.log(str1);
}

urlify();
