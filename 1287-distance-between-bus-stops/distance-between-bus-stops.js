/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
let sum = 0
let des = 0
if(start > destination){
    [start,destination] = [destination,start]
}
for(let i=0;i<distance.length;i++){
    if(i<destination && i>= start){
        sum+=distance[i]
    }else{
        des += distance[i]
    }
}return Math.min(sum,des)
};