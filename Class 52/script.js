// 1- Slice the array to extract a subarray that contains only the first three elements.
// 2- Splice the original array by removing the last two elements and inserting the values [0, 0] at the same position.
// 3- ForEach the modified array to print each element to the console, but for every element that is even, print EVEN instead of the number.

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let fullarray = array.slice(0 , 3)
console.log(fullarray);

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array2.splice(-2,2, 0, 0);
console.log(array2);

let array3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let even = [];
array3.forEach((Aaman) => {
    if (0 === array3[Aaman] % 2) {
        even.push(array3[Aaman])
    }
});
console.log(even);