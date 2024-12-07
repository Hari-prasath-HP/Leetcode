var lengthOflastWord = function(string){
    let arr = string.trim().split(" ")
    return arr[arr.length-1].length
}
console.log(lengthOflastWord(string))
