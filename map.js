var words = ["ground", "control", "to", "major", "tom"];

function map (array, callback) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  console.log(result);
}



map(words, function(word) {
  return word.length;
});