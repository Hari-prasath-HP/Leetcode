/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
let ans = ''
for(let i=0;i+2<num.length;i++){
    if(num[i]==num[i+1] && num[i+1]==num[i+2]){
        let current = num.substring(i, i+3)
        if(current>ans){
        ans = current
    }
    }
    
} return ans
};