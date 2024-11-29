let nums = [11,2,1,2,3];
let consecutiveOne = function(nums){
    let count = 0;
    countmax =0;
    for(let num of nums){
        if(num == 1){
            count ++;
            countmax = Math.max(countmax,count)
        }else {
            count=0;
        }
    }return countmax;
};
console.log(consecutiveOne(nums))
