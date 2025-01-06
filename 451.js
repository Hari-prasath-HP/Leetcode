let s = "tree";
let arr = s.split("")
let obj = {};
for(let val of arr){
    if(obj[val]){
        obj[val]++
    }else obj[val] = 1
}
let sorted = Object.keys(obj).sort((a,b)=>obj[b] - obj[a])
console.log(result = sorted.map(char => obj[char]>1 ? char.repeat(obj[char]):char)
                .join(""))
