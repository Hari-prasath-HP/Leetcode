/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let a = 0,b=1,c=0,d=1
    if(n===1){
        return 1
    }else if(n===2){
        return a+b
    }else if(n===3){
        return a+b+d
    }else{
        for(let i=0;i<n-2;i++){
            c = a+b+d
            a=b
            b=d
            d=c
        }
        return c
    }
};