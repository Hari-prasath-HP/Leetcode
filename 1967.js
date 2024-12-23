let patterns = ["a","abc","bc","d"];
let word = "abc";
var numOfStrings = function(patterns, word) {
  return patterns.filter((patterns) => word.includes(patterns)).length
};
