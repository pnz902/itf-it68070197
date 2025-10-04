const account = document.getElementById("account")
const cash = document.getElementById("cash")
const operate = document.getElementById("bank-operations")
const money = document.getElementById("money")
let count = 0

function change() {
    account.value = Number(account.value)
    cash.value = Number(cash.value)
}

function showresult() {
    count = Number(count) + 1
    if (operate == 'Deposit'){
        if (money <= cash){
            account.value = Number(account.value) + Number(money)
            cash.value = Number(cash.value) - Number(money)
            document.getElementById("result").innerHTML = ("%d, Current account balance: %d, Current cash balance: %d",count,account,cash)
        }else {
            document.getElementById("result").innerHTML = ("%d, Couldn't deposit entered balance. (Insufficient cash balance)",count)
        }
    }else {
        if (money <= account){
            cash.value = Number(cash.value) + Number(money)
            account.value = Number(account.value) - Number(money)
            document.getElementById("result").innerHTML = ("%d, Current account balance: %d, Current cash balance: %d",count,account,cash)
        }else {
            document.getElementById("result").innerHTML = ("%d, Couldn't withdraw entered balance. (Insufficient account balance)",count)
        }
    }
}