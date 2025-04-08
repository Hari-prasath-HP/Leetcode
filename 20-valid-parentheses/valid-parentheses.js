/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a = []
    for(let i=0;i<s.length;i++){
        if(s[i] == "{"){
            a.push("}")
        }else if(s[i] == "("){
            a.push(")")
        }else if(s[i] == "["){
            a.push("]")
        }else if(a.pop() != s[i]){
            return false
        }
    }return !a.length
};