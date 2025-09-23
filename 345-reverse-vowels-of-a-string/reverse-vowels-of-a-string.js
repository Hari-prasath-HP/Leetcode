/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "AaEeIiOoUu"
    let str = s.split('')
    function b(left,right){
        if(left>=right)return 
        if(!vowels.includes(str[left])){
            b(left+1,right)
        }else if(!vowels.includes(str[right])){
            b(left,right-1)
        }else{
            [str[left],str[right]] = [str[right],str[left]]
            b(left+1,right-1)
        }
    }
    b(0,s.length-1)
    return str.join('')
};