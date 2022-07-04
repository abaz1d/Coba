https://www.w3schools.com/js/default.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
terus cobain latihan disini https://www.codecademy.com/learn/introduction-to-javascript




Wifi: RUBICAMP
Sandi: 2022@RubiCAMP#
Wifi: RUBICAMP5G
Sandi: 2022@RubiCAMP#5G

//CH1
//==============================================================
function sum(arr){
  var s = 0;
  for(var i= 0; i<arr.length; i++){
    s = s + arr[i];
  }
  console.log(s);

}

sum([1,2,7]);
sum([1,4]);
sum([11]);
sum([10,3,6,7,9]);


//CH2
//==============================================================
function deretKaskus(n) {
  let hasil = []
  for (i = 1; i <= n; i++) {
  var j = i * 3;
    if (j % 5 == 0 && j % 6 == 0) {
      hasil.push('Kaskus')
    } else if (j % 5 === 0) {
      hasil.push('Kas')
    } else if (j % 6 === 0) {
       hasil.push('Kus')
    } else {
       hasil.push(j)
    }
  }
  return hasil
}

console.log(deretKaskus(10))

//CH3
//==============================================================

function romawi(n) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var i of Object.keys(roman)) {
    var q = Math.floor(n / roman[i]);
    n -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}

  console.log("Script Testing untuk Konversi Romawi\n");
  console.log("input  | expected | result");
  console.log("------ | -------- | ------");
  console.log("4      | IV       | ",romawi(4));
  console.log("9      | IX       | ",romawi(9));
  console.log("13     | XIII     | ",romawi(13));
  console.log("1453   | MCDLIII  | ",romawi(1453));
  console.log("1646   | MDCXLVI  | ",romawi(1646));
