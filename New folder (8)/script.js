/* var myBtn = document.getElementById("first-btn");
 console.log(getBtn);

 myBtn.addEventListener("click", function () {
   const event = Object.keys('Div')
     .filter((props) => props.startsWith("on"))
     .map((event) => event.slice(2));
     console.log(event);
 });

// myBtn.addEventListener('keypress', function(){
//     alert("yes")
// });







 var myInput = document.getElementById("inp");
 document.addEventListener("keypress", function (e) {
   console.log(e.key);
   if (e.key == "Enter") {
     console.log(myInput.value);
   }
 });




 var a = document.getElementsByTagName('input').classlist="first-input";

a.classlist


 function handleClick() {
     var dummyVar = document.querySelectorAll(".para");
     console.log(dummyVar);
 }*/


// let btn = document.querySelector('#mybtn');
// var body = document.body;

// btn.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         btn.textContent = 'Switch to Light Mode';
//     } else {
//         btn.textContent = 'Switch to Dark Mode';
//     }
// });

function myFunction() {
    var a = document.body;
    a.classList.toggle("dark-mode")
}