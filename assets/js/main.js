function myReset() {
    console.log("reset")
    document.getElementById("result").innerHTML = "0"
}
let x = 0
function plusOne() {
    console.log("+1")
    x += 1
    document.getElementById("result").innerHTML = x
}
function minusOne() {
    console.log("-1")
    x -= 1
    document.getElementById("result").innerHTML = x
}
function plusTen() {
    console.log("-1")
    x += 10
    document.getElementById("result").innerHTML = x
}
function minusTen() {
    console.log("-10")
    x -= 10
    document.getElementById("result").innerHTML = x
}
function plusHundred() {
    console.log("+100")
    x += 100
    document.getElementById("result").innerHTML = x
}
function minusHundred() {
    console.log("-100")
    x -= 100
    document.getElementById("result").innerHTML = x
}
function double() {
    console.log("*2")
    x *= 2
    document.getElementById("result").innerHTML = x
}