/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let istrue = true;
    for(let val of ransomNote){
        if(magazine.includes(val)){
            magazine = magazine.replace(val,"")
        }else{
            istrue = false;
            break
        }
    }return istrue
};