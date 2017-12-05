var str = 'axbcdru';
var obj = {};

for (var i = 0; i < str.length; i++) {
  if (!obj[str[i]]) {
    obj[str[i]] = 1;
    if (i === str.length - 1) {
      console.log('String is unique');
    }
  } else {
    console.log('String is not unique');
    break;
  }
}
