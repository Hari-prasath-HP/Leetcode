/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let space = ""
    let word = ""
    for(let val of s){
        if(val == " "){
            space += word + val;
            word = ""
        }else {
            word = val + word
        }
    }return space + word 
};