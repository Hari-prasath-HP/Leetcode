let words = ["leet","code"]
let x = "e"
let arr = []
for(let i=0;i<words.length;i++){
    if(words[i].split('').includes(x))arr.push(i)
}
console.log(arr)
