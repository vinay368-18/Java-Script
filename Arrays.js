
let arr = new Array();

arr.push(5);
arr.push(10);
arr.push(15);
arr.push(20);
arr.push(1);
arr.push(2);
console.log(arr);
arr.pop(); // removes last elem
console.log(arr);
arr.shift(); // removes first elem
console.log(arr);
arr.unshift(100) // adds elem to begining of array
console.log(arr)
console.log(arr.splice(1,2)) // 1-> index , 2-> number of elem from the index which need to be removed
console.log(arr);



