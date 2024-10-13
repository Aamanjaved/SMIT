    // let num1 = parseFloat(prompt("Enter the first number:"));
    // if (isNaN(num1)) {
    //     alert("Invalid input.");
    // }

    // let num2 = parseFloat(prompt("Enter the second number:"));
    // if (isNaN(num2)) {
    //     alert("Invalid input.");
    // }

    // let operator = prompt("Enter an operator (+, -, *, /):");

    // let result;
    // if (operator === "+") {
    //     result = num1 + num2;
    // } else if (operator === "-") {
    //     result = num1 - num2;
    // } else if (operator === "*") {
    //     result = num1 * num2;
    // } else if (operator === "/") {
    //     if (num2 === 0) {
    //         alert("Error: Division by zero is not allowed.");
    //     }
    //     result = num1 / num2;
    // } else {
    //     alert("Invalid operator. Please use one of the following: +, -, *, /.");
    // }

    // alert("Result: " + result);



    // var number1 = "", number2 = "";

    // function num1() {
    //     var user1 = Number(prompt("Enter 1st Number"));
    //     number1 = user1;
    // }
    
    // function num2() {
    //     var user2 = Number(prompt("Enter 2nd Number"));
    //     number2 = user2;
    // }
    
    // function add() {
    //     alert(`result : ${number1 + number2}`)
    // }

    // function sub() {
    //     alert(`result : ${number1 - number2}`)
    // }

    // function mul() {
    //     alert(`result : ${number1 * number2}`)
    // }
    
    // function div() {
    //     alert(`result : ${number1 / number2}`)
    // }

//     var d = new Date();
// console.log(d)


// function checkAddress(fieldId) {
// var a = document.getElementById(fieldId).value;
//     if (a === "") {
//     alert("Email address required.");
//     }else{
//         alert("Done")
//     }
//     }

function checkAddress(fieldId) {
    var val = document.getElementById(fieldId).value;
    if (val === "") {
    alert("Email address required.");
    }
    }