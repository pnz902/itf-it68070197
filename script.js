const myinput = document.getElementById("myinput")
const account = document.getElementById("account")
const cash = document.getElementById("cash")
const selectBox = document.getElementById("bank-operation");

function add() {
    myinput.value = Number(myinput.value) + 1
}

function change() {
    account.value = Number(account.value)
    cash.value = Number(cash.value)
}

function result() {

}