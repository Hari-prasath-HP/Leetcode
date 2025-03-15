/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let a = s.split("").sort()
let b = t.split("").sort()
let istrue = true
for(let i=0;i<a.length;i++){
    if(a[i]!==b[i]){
        istrue = false
    }
}
if(a.length != b.length){
    istrue = false
}return istrue
};