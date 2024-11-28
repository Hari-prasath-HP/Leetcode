s = "Hello World";
var reverseWords = function(s) {
    let a = s.trim().split(/\s+/).reverse().join(" ");
    console.log(a)
};
reverseWords(s)
