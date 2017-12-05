var str = '$:acc dcca';

function checkPalindrome(str) {
  var obj = {};

  for (var i = 0, iLen = str.length; i < iLen; i++) {
    var currStr = str[i].charCodeAt();
    if ((currStr >= 65 && currStr <= 90) || (currStr >= 97 && currStr <= 122)) {
      if (!obj[str[i]]) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]]++;
      }
    }
  }

console.log(obj);
  //Check if there are more than one odd count.
  var bool = false;
  for (var item in obj) {
    if (obj[item] % 2 === 1) {
      if (bool) {
        console.log('not a palindrome');
        return false;
      } else {
        bool = true;
      }
    }
  }
  console.log('palindrom');
  return true;
}

checkPalindrome(str);
