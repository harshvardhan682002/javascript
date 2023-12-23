const people = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Doe', age: 35 }]; 
function sortAscending(arr){
    return arr.slice().sort();
}
function sortDescending(arr) {
    return arr.slice().sort().reverse();
  }
const ascendingOrder = sortAscending(people);
const descendingOrder = sortDescending(people);

console.log("Ascending order:", ascendingOrder); 
console.log("Descending order:", descendingOrder);