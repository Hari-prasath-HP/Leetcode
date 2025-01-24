let arr = [2,2,3,4]
let obj = {}
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }else obj[arr[i]] = 1
}
let lar = -1
for(let val in obj){
    if(obj[val] === Number(val)){
        lar = Math.max(lar,obj[val])
    }
}
console.log(lar)
