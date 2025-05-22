/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
let arr = {}
for(let key of s){
    if(arr[key]){
        arr[key]+=1
        if(arr[key]==2){
            return key
            break
        }
    }else arr[key]=1
}
};