var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        
        let charSet = new Set(s);
        return charSet.size < s.length; 
    }

    let diffs = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffs.push(i);
        }
    }
    return diffs.length === 2 &&
           s[diffs[0]] === goal[diffs[1]] &&
           s[diffs[1]] === goal[diffs[0]];
};
console.log(buddyStrings(s, goal))
