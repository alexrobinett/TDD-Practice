
function analyzeArray(arr){
    const stats = {}

    if (Array.isArray(arr) == true){
    stats.average = arr.reduce(function(t,c){return t + c},0) / arr.length
    stats.min = arr.sort(function(a,b){return a - b})[0]
    stats.max = arr.sort(function(a,b){return b - a})[0]
    stats.length = arr.length
    return stats

    }else return "this isn't an array"


}
  
  module.exports = analyzeArray;