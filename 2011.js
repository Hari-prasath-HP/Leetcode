
 operations = ["X++","++X","X--"]
var finalValueAfterOperations = function(operations) {
    let val = 0;
    for(let i=0;i<operations.length;i++){
        if(operations[i] == "X++" || operations[i] == "++X"){
            val +=1;
            console.log(operations[i])
        }else{
            val -=1
        }
    } return val;
};
console.log(finalValueAfterOperations(operations))
