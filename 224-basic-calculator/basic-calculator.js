/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = []
let res = 0
let sign = 1
let num = 0
for(let i=0;i<s.length;i++){
    let ch = s[i]
    if(!isNaN(ch) && ch !== ' '){
        num = num * 10 + parseInt(ch)
    }else if(ch === '+'){
        res += num * sign
        num = 0 
        sign = 1
    }else if(ch === '-'){
        res += num*sign
        num = 0
        sign = -1
    }else if(ch === '('){
        stack.push(res)
        stack.push(sign)
        res = 0
        sign = 1
    }else if(ch === ')'){
        res += num * sign 
        num = 0
        res *= stack.pop()
        res += stack.pop()
    }
} 
if(num !== 0){
    res += num*sign
}return res
};