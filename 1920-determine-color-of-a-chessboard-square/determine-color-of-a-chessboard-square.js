/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let a = coordinates.charCodeAt(0)-96
let b = coordinates[1]
let res
if(a%2===0){
    res = b%2 !== 0
}else {
    res = b%2 === 0
}
return res
};