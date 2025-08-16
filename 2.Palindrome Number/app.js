// x = 121
let x = 121
var isPalindrome = function(x) {
    console.log(x < 0 ? false : (x === +x.toString().split("").reverse().join("")));
};

isPalindrome(x)