/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let tot = 0
let ac= 0
let bc = 0
let n = costs.length/2
costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
for(let i=0;i<costs.length;i++){
    if(ac==n){
        tot+=costs[i][1]
    }else if(bc == n){
        tot += costs[i][0]
    }else {
        const a = costs[i][0]
        const b = costs[i][1]
        if(a<b){
            tot += a;
            ac++
        }else {
            tot +=b
            bc ++
        }
    }
}return tot
};