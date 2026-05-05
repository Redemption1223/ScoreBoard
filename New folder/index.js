document.getElementById("guestScore").textContent = num2
document.getElementById("homeScore").textContent = num1

function addOne() {
    let num1 = parseInt(document.getElementById("homeScore").textContent)
    num1 += 1
    document.getElementById("homeScore").textContent = num1
}

function addOneG() {
    let num2 = parseInt(document.getElementById("guestScore").textContent)
    num2 += 1
    document.getElementById("guestScore").textContent = num2
}

function addTwo() {
    let num1 = parseInt(document.getElementById("homeScore").textContent)
    num1 += 2
    document.getElementById("homeScore").textContent = num1
}

function addTwoG() {
    let num2 = parseInt(document.getElementById("guestScore").textContent)
    num2 += 2
    document.getElementById("guestScore").textContent = num2
}

function addThree() {
    let num1 = parseInt(document.getElementById("homeScore").textContent)
    num1 += 3
    document.getElementById("homeScore").textContent = num1
}

function addThreeG() {
    let num2 = parseInt(document.getElementById("guestScore").textContent)
    num2 += 3
    document.getElementById("guestScore").textContent = num2
}

function nextPeriod() {
  document.getElementById("homeScore").textContent = '00'
    document.getElementById("guestScore").textContent = '00'
}