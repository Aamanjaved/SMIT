var getInput = document.getElementById("input");
var getAllLocalStorageItem = JSON.parse(localStorage.getItem("task")) || []; // key = task
var getBtn = document.getElementById("btn");


getBtn.addEventListener("click", function () {
  let userName = getInput.value;
  let dummyArr = getAllLocalStorageItem ? getAllLocalStorageItem : []; // Ternary operator like if else
  dummyArr.push(userName);
  localStorage.setItem("task", JSON.stringify(dummyArr));
});

nconsole.log('getAllLocalStorageItem',getAllLocalStorageItem)