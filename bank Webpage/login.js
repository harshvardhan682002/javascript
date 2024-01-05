const params = new URLSearchParams(window.location.search);
console.log("Hello", params.get("account_name"));
const data = document.getElementById("nameInput");
console.log("Data", data);
data.innerHTML += " " + params.get("account_name");



