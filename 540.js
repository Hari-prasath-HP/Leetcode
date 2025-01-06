let arr = [1,1,2,2,3,3,10,4,4];
for(let i=0;i<arr.length;i++){
    if(arr[i] !== arr[i+1] && arr[i] !== arr[i-1]){
        console.log(arr[i])
    }
}
