let accountBalance = 50;
function addAmount(){
    console.log("addAmount is called");
    const amountEle = document.getElementById("deposited_amount");
    const amountvalue = amountEle.value;
    accountBalance = accountBalance + Number(amountvalue);
    const balanceEle = document.getElementById("Balance");
    balanceEle.innerHTML = accountBalance;
}
function substractAmount(){
    console.log("substractAmount is called");
    const amountEle = document.getElementById("withdraw_amount");
    const amountvalue = amountEle.value;
    accountBalance = accountBalance - Number(amountvalue);
    const balanceEle = document.getElementById("Balance");
    balanceEle.innerHTML = accountBalance;
}

function updateBalance() {
    const balanceEle = document.getElementById("balance");
    balanceEle.innerHTML = accountBalance;
}
