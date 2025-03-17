/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arr1.sort((a,b)=>a-b)
let arr3 = [...arr2]
for(let i=0;i<arr1.length;i++){
    if(arr3.indexOf(arr1[i])==-1){
        arr3.push(arr1[i])
    }else {
        arr3.splice(arr3.indexOf(arr1[i]),0,arr1[i])
    }
}
for(let i=0;i<arr2.length;i++){
    arr3.splice(arr3.indexOf(arr2[i]),1)
}return arr3
};