/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let a = s.split(' ')
let res = []
for(let i=0;i<a.length;i++){
    if(!isNaN(a[i])){
        res.push(a[i])
    }
}
let istrue = true
let arr = res.map(Number);
for(let i=0;i<arr.length;i++){
    if(arr[i] >=arr[i+1]){
        istrue = false
    }
}return istrue
};