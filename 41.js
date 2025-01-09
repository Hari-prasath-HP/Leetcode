let nums = [3,2,0];
let a = 1;
nums.sort((a,b)=>a-b)
for(let i=0;i<nums.length;i++){
    if(nums[i] === a){
        a++

    } 
}
console.log(a)
