let word = "Usa";
let set = false;
var detectCapitalUse = function(word) {
    if(word.toLowerCase()== word || word.toUpperCase()== word){
        set = true;
    }else if((word[0] + word.slice(1).toLowerCase()) == word){
        set = true;
    }console.log(set)
};
detectCapitalUse(word)
