/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
let b = a.split("").reverse("").join("")
return a ==b

};