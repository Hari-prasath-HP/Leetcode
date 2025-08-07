/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count = 0
let max = 0
for(let i=0;i<s.length;i++){
    if(s[i]=='E'){
        count += 1
        max = Math.max(count,max)
    }else{
        count -= 1
    }
}return max
};