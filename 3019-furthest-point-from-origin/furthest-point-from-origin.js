/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left = 0
let right = 0
let ans = 0
let count = 0
for(let char of moves){
    if(char == 'L'){
        left++
    }else if(char == 'R'){
        right++
    }else{
        ans++
    }
}
if(left>right){
    left+=ans
}else if(right>left){
    right+=ans
}else{
    left+=ans
}
return Math.abs(count = left-right)
};