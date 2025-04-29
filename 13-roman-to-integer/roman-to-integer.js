/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
    let a = s.split('')
let sum = 0
for(let i=0;i<a.length;i++){
    // sum += obj[a[i]]
    if(a[i+1]=="M" && a[i] == "C" ||a[i]=="C" && a[i+1]=="D"){
        sum += obj[a[i+1]]-obj[a[i]];
        a.shift(a[i+1])
    }else if(a[i+1]=="L" && a[i] == "X" ||a[i]=="X" && a[i+1]=="C"){
        sum += obj[a[i+1]]-obj[a[i]]
        a.shift(a[i+1])
    }else if(a[i+1]=="X" && a[i] == "I" ||a[i]=="I" && a[i+1]=="V"){
        sum += obj[a[i+1]]-obj[a[i]]
        a.shift(a[i+1])
    }else sum += obj[a[i]]
}return sum
};