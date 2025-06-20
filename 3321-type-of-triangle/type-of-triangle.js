/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let [a,b,c] = nums
let ans
    if(a==b && b==c && (a+b)>c && (b+c)>a && (a+c)>b){
        ans = "equilateral"
    }else if((a==b || b==c || a==c) && (a+b)>c && (b+c)>a && (a+c)>b){
        ans = "isosceles"
    }else if(a!=b && b!=c && a!=c && (a+b)>c && (b+c)>a && (a+c)>b){
        ans = "scalene"
    }else {
        ans = "none"
    }return ans
};