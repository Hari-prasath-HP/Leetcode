/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
let res = []
let path = []
function isPalindrome(s,left,right){
    while(left<right){
        if(s[left]!==s[right])return false
        left++
        right--
    }
    return true
}
function back(start){
    if(start===s.length){
        res.push([...path])
        return
    }
    for(let i= start;i<s.length;i++){
        if(isPalindrome(s,start,i)){
            path.push(s.slice(start,i+1))
            back(i+1)
            path.pop()
        }
    }
}
back(0)
return res
};