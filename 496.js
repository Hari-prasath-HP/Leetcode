let nums1 = [1,2,3,4,5,6]
let nums2 = [6,5,4,3,2,1,7]

var nextGreaterElement = function(nums1, nums2) {
    let nums3 = []
    for (let i=0;i<nums1.length;i++){
        let found = false;
        let greater = -1;

        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                found = true;
            }
            if(found && nums2[j]>nums1[i]){
                greater = nums2[j];
                break;
            }
        }nums3.push(greater)
    } return nums3
};
console.log(nextGreaterElement(nums1,nums2))
