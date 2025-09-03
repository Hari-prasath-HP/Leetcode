/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
let d = 0
let a = 0
let l = 0
let w = 1
for(let val of dimensions){
    let b = Math.sqrt(((val[l]**2)+(val[w]**2)))
    let c = val[l]*val[w]
    if(d<b||((b==d)&&(c>=a))){
        d=b
        a=c
    }
}return a
};