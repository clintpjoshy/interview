function stringCompress() {
  var count = 0;
  var arr = [];
  var str = 'aaaabcccdaaaaa';
  var strLen = str.length;

  for (var i = 0; i < strLen; i++) {
    count++;

    if (i + 1 >= strLen || str.charAt(i) !== str.charAt(i + 1)) {
      arr.push(str[i]);
      arr.push(count);
      count = 0;	
    }
  }

console.log(arr.length);
  var str1 = (arr.length > strLen) ? str : arr.join('');
  console.log(str1);
  return str1;
}

stringCompress();
