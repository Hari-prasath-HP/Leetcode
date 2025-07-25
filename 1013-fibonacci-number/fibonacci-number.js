/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
let a = 0,b=1,c=0
if(n===0){
    c = 0
}else if(n===1){
    c = 1
}else{
    for(i=0;i<n-1;i++){
        c = a+b
        a=b
        b=c
    }
}
return c
};