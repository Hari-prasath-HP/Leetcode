/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
   let map = {}
    let arr = s.split("")
    for(let s of arr){
        map[s] = (map[s]||0)+1
    }
    for(let i=0;i<s.length;i++){
        if(map[s[i]]== Number(s[i]) && map[s[i+1]] == Number(s[i+1]) && s[i]!== s[i+1]){
            return s[i] + s[i+1]  
        }
    }
    return ""
};