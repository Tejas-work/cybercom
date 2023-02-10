
let str  = "101023";

var restoreIpAddresses = function(s) {
  var res = [];
  var len = s.length;
  var str1 = '';
  var str2 = '';
  var str3 = '';
  var str4 = '';

  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      for (var k = 1; k <= 3; k++) {
        for (var m = 1; m <= 3; m++) {
          str1 = s.substr(0, i);
          str2 = s.substr(i, j);
          str3 = s.substr(i + j, k);
          str4 = s.substr(i + j + k, m);
          if (i + j + k + m === len
              && isValid(str1)
              && isValid(str2)
              && isValid(str3)
              && isValid(str4)) {
            res.push(str1 + '.' + str2 + '.' + str3 + '.' + str4);
          }
        }
      }
    }
  }

  return res;
};

var isValid = function (str) {
  if (str.length > 1 && str[0] === '0') return false;
  if (Number(str) > 255) return false;
  return true;
};

