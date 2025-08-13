/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    if(s.length<3)return true
    let left = ''
let right = '' 
let leftCount = 0
let rightCount = 0
let arr = ['a','e','i','o','u']
for(let i=0;i<s.length;i++){
    if(i<s.length/2){
        left+=s[i].toLowerCase()
    }else{
        right+=s[i].toLowerCase()
    }
}
for(let i=0;i<s.length/2;i++){
    if(arr.includes(left[i])){
        leftCount++
    }
    if(arr.includes(right[i])){
        rightCount++
    }
}return leftCount === rightCount
};