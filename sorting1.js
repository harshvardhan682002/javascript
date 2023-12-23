const cars = ["volvo", "swift", "accord"];
function sortAscending(arr) {
    return arr.slice().sort();
  }
  function sortDescending(arr) {
    return arr.slice().sort().reverse();
  }
const ascendingOrder = sortAscending(cars);
const descendingOrder = sortDescending(cars);

console.log("Ascending order:", ascendingOrder); 
console.log("Descending order:", descendingOrder);