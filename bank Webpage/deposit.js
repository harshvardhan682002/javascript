const transactions = [];
let accountBalance = 500;

const balanceEle = document.getElementById("Balance");
balanceEle.innerHTML = accountBalance;

function deposit(){
    console.log("deposit is called");
    const amountEle = document.getElementById("Enter amount").value;
    const amountvalue = amountEle;
    accountBalance = accountBalance + Number(amountvalue);
    const balanceEle = document.getElementById("Balance");
    balanceEle.innerHTML = accountBalance;
    addTransaction("Deposit", amountvalue, new Date().toLocaleDateString());
}

function withdraw(){
    console.log("withdraw is called");
    const amountEle = document.getElementById("Enter amount");
    const amountvalue = amountEle.value;
    accountBalance = accountBalance - Number(amountvalue);
    const balanceEle = document.getElementById("Balance");
    balanceEle.innerHTML = accountBalance;
    addTransaction("Withdraw", amountvalue, new Date().toLocaleDateString());
}

function addTransaction(type, amount, date) {
    const transaction = { type, amount, date };
    transactions.push(transaction);
    displayTransactions();
}
  
function displayTransactions() {
    const transactionBody = document.getElementById("transactionBody");
    transactionBody.innerHTML = "";
    
    transactions.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.type}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.date}</td>
        `;
        transactionBody.appendChild(row);
    });
}
