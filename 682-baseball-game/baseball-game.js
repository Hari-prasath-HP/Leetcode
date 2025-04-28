/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    for(let i=0;i<operations.length;i++){
    if(operations[i]=="C"){
        operations.splice(i-1,2)
        i-=3
    }else if(operations[i] == "D"){
        operations[i] = operations[i-1]*2
        i--
    }else if(operations[i]=="+"){
        operations[i]=operations[i-1]+operations[i-2]
        i--
    }
    else {
        operations[i]=Number(operations[i])
    } 
}
let sum = 0
for(let i=0;i<operations.length;i++){
    sum+= operations[i]
}
return sum
};