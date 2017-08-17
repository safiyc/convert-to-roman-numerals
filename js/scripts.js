
var converter = function(num) {

var result = "";
var numberInput = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var newNumber = "";
var romans = ["M", "CM", "D", 'CD', "C", "XC", "L", "XL", "X", "IX",  "V", "IV", "I" ];

debugger
for (var i = 0; i < numberInput.length; i++) {
    while (numberInput[i] <= num) {
      result += romans[i];
      num -= numberInput[i];
    }

}
return result;

debugger
}


$(document).ready(function() {
  $("form#regularNumber").submit(function(event) {
    event.preventDefault();
  var numberInput = parseInt($("input#number").val());
    var result = converter(numberInput);
    $(".well").show();
    $(".rNumeral").text(result);

  });
});


// function one(numberInput) {
//   if (numberInput === 1){
//     return romans[12];
//   }
//   else if (numberInput === 5) {
//        return romans[1];
//   }
//   else if (numberInput === 10) {
//        return romans[2];
//   }
//   else if (numberInput === 50) {
//        return romans[3];
//   }
//   else if (numberInput === 100) {
//        return romans[4];
//   }
//   else if (numberInput === 500) {
//        return romans[5];
//   }
//   else if (numberInput === 1000) {
//        return romans[6];
//   }
// };
