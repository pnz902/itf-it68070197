const account = document.getElementById("account")
const cash = document.getElementById("cash")
const result = document.getElementById("result")
let count = 0

function change() {
    count = Number(count) + 1
    if (result.value != ""){
        result.value = (count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value + "\n") + result.value
    }else{
        result.value = (count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value)
    }
}

function showresult() {
    const operate = document.getElementById("bankoperations")
    const money = document.getElementById("money")
    count ++
    if (operate.value == 'Deposit'){
        if (Number(money.value) <= Number(cash.value)){
            account.value = Number(account.value) + Number(money.value)
            cash.value = Number(cash.value) - Number(money.value)
            result.value = (count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value + "\n") + result.value
        }else {
            result.value =  count + ", Couldn't deposit entered balance. (Insufficient cash balance)" + "\n" + result.value}
        }
    else{
        if (Number(money.value) <= Number(account.value)){
            cash.value = Number(cash.value) + Number(money.value)
            account.value = Number(account.value) - Number(money.value)
            result.value = (count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value + "\n") + result.value
        }else {
            result.value = count + ", Couldn't withdraw entered balance. (Insufficient account balance)" + "\n" + result.value
        }
    }
}