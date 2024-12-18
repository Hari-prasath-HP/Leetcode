var sumOfSquares = function(nums) {
    let arr = 0;
    let n = nums.length;
    for(i=1;i<=nums.length;i++){
        if(n % i == 0){
            arr += nums[i-1]*nums[i-1]
        }
    }return arr;
};
console.log(sumOfSquares(nums))
