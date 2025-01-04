let a = [1,5,3,4,2,3];
let t = 3;
index = []
let arr = a.sort((a,b)=>a-b);
// console.log(arr)
for(let i=0;i<arr.length;i++){
    if(arr[i] === t){
        index.push(i)
    }
}
console.log(index)
