/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map()
for(let char of s){
    map.set(char,(map.get(char)||0)+1)
}
let res = ''
for(let char of order){
    if(map.has(char)){
        res += char.repeat(map.get(char))
        map.delete(char)
    }
}
for(let [char,count] of map){
    res += char.repeat(count)
}return res
};