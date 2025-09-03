/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
let dimension = 0
let area = 0
let len = 0
let wid = 1
for(let val of dimensions){
    let currdia = Math.sqrt(((val[len]**2)+(val[wid]**2)))
    let currarea = val[len]*val[wid]
    if(dimension<currdia||((currdia==dimension)&&(currarea>=area))){
        dimension=currdia
        area=currarea
    }
}return area
};