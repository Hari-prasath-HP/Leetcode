let word1 = ["ab", "c"];
let word2 = ["ac", "b"];
var arrayStringsAreEqual = function(word1, word2) {
   let success = false;
   array1 = word1.join('');
   array2 = word2.join('');
   if(array1 == array2){
    success = true;
   }return success
};
console.log(arrayStringsAreEqual(word1, word2))
