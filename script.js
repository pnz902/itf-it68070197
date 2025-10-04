const account = document.getElementById("account")
const cash = document.getElementById("cash")
let result = document.getElementById("result")
let count = 0

function change() {
    count = Number(count) + 1
    result.innerHTML = count + ", Current account balance: " + account.value +", Current cash balance: " + cash.value
}

function showresult() {
    const operate = document.getElementById("bankoperations")
    const money = document.getElementById("money")
    count ++
    if (operate.value == 'Deposit'){
        if (money.value <= cash.value){
            account.value = Number(account.value) + Number(money.value)
            cash.value = Number(cash.value) - Number(money.value)
            result.innerHTML = count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value
        }else {
            result.innerHTML = count + ", Couldn't deposit entered balance. (Insufficient cash balance)"
        }
    }else {
        if (money.value <= account.value){
            cash.value = Number(cash.value) + Number(money.value)
            account.value = Number(account.value) - Number(money.value)
            result.innerHTML = count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value
        }else {
            result.innerHTML = count + ", Couldn't deposit entered balance. (Insufficient cash balance)"
        }
    }
}