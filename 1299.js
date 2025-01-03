let arr = [17,18,5,4,6,1]
let result = [];
for(let i=0;i<arr.length;i++){
    let lar = 0;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]>lar){
            lar = arr[j]
        }
    }
    if(lar !== 0){
        result.push(lar)
    }else if(lar === 0){
        result.push(-1)
    }
}
console.log(result)
