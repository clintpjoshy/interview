var str1 = 'pale';
var str2 = 'palee';

function oneAway(str1, str2) {
  var str1Len = str1.length;
  var str2Len = str2.length;

  if (Math.abs(str1Len - str2Len) > 1) {
    console.log('more than one away (length)');
    return false;
  }

  var i = 0;
  var j = 0;
  var foundDiff = false;
  var lngStr = '';
  var shtStr = '';

  if (str1Len > str2Len) {
    lngStr = str1; 
    shtStr = str2; 
  } else {
    shtStr = str1; 
    lngStr = str2; 
  }

  while(j < lngStr.length && i < shtStr.length) {
    if (lngStr.charAt(j) !== shtStr.charAt(i)) {
      if (foundDiff) {
        console.log('more than one difference');
        return false;
      } else {
        foundDiff = true;
      }

      if (str1Len === str2Len) {
        i++ //short
      }
    } else {
      i++;
    }
    j++; //increase the length of long all the time.
  }
  console.log('one difference');
  return true;
}

oneAway(str1, str2);
