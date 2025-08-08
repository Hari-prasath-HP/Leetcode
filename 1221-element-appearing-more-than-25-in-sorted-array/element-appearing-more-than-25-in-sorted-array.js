/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let obj = {}
for(let num of arr){
    obj[num] = (obj[num]||0)+1
}
for(let key in obj){
    if(obj[key]>arr.length/4){
        return Number(key)
    }
}
};