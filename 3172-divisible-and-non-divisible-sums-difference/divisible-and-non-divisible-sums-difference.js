/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    sum = 0
Nsum = 0
for(let i=1;i<=n;i++){
    if(i%m !== 0){
      Nsum+=i  
    }else{
        sum+=i
    }
}return Nsum - sum
};