/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
let count = 0
let arr = ["a","e","i","o","u"]
let obj = {}
let obj1 = {}
for(let char of s){
    if(arr.includes(char)){
        if(obj[char]){
        obj[char]+=1
    }else{
        obj[char] = 1
    }
    }else{
        if(obj1[char]){
            obj1[char]+=1
        }else{
            obj1[char] = 1
        }
    }
    
}
let lar = Object.values(obj)
let lar1 = Object.values(obj1)
if(lar.length){
    let vow = Math.max(...lar)
    count+=vow
}
if(lar1.length){
    let con = Math.max(...lar1)
    count+=con
}
return count
};