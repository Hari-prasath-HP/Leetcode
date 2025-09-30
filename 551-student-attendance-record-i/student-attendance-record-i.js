/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let A = 0
    let L = 0
    for(let i=0;i<s.length;i++){
        if(s[i]==='L'){
            L++
        }else if(L<=2){
            L = 0
        }
        if(s[i]==='A'){
            A++
        }
    }
    return A<2 && L<3
};