/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let a = date.split('-')
let res = ""
for(let i=0;i<a.length;i++){
    if(i<a.length-1){
        res+=Number(a[i]).toString(2)+'-'
    }else{
        res+=Number(a[i]).toString(2)
    }
    
}return res
};