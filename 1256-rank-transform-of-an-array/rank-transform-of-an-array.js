/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    // Step 1: Sort the array and get unique elements
    let sort = [...arr].sort((a, b) => a - b);
    
    // Step 2: Create a rank map for unique elements
    let obj = {};
    let rank = 1;
    
    for (let i = 0; i < sort.length; i++) {
        // If this value hasn't been assigned a rank yet, assign it
        if (obj[sort[i]] === undefined) {
            obj[sort[i]] = rank++;
        }
    }

    // Step 3: Map the original array to the ranks based on the rank map
    return arr.map(i => obj[i]);
};
