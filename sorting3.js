const books = [{ title: 'Book1', author: 'Author2', publicationYear: 2005 },
  { title: 'Book2', author: 'Author1', publicationYear: 2010 },
  { title: 'Book3', author: 'Author2', publicationYear: 2020 },
  { title: 'Book4', author: 'Author3', publicationYear: 2015 },
]; 

function sortAscending(arr){
    return arr.slice().sort();
}
function sortDescending(arr) {
    return arr.slice().sort().reverse();
  }
const ascendingOrder = sortAscending(books);
const descendingOrder = sortDescending(books);

console.log("Ascending order:", ascendingOrder); 
console.log("Descending order:", descendingOrder);