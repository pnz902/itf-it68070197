const myinput = document.getElementById("myinput")
const account = document.getElementById("account")
const cash = document.getElementById("cash")

function add() {
    myinput.value = Number(myinput.value) + 1
}

function change() {
    account.value = Number(account.value)
    cash.value = Number(cash.value)
}