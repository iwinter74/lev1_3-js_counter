myReset() {
    console.log("reset")
    document.getElementById("counter").reset()
}
let x = 0
plusOne() {
    console.log("+1")
    x+=1
    document.getElementById("result").innerHTML = "x"
}
minusOne() {
    console.log("-1")
    x-=1
    document.getElementById("result").innerHTML = "x"
}
plusTen() {
    console.log("-1")
    x+=10
    document.getElementById("result").innerHTML = "x"
}