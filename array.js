/*
creating array in java 
int arr [] = {1,2};
int arr [] = new int[8];
*/

//creating array in java script
let arr = new Array(5);
arr[0] = "Virat";
arr[1] = "Root";
arr[2] = "Babar";
arr[3] = "Smith";
arr[4] = "ken";

//getting all the element in the array
console.log(arr);
//first index
console.log(arr[0]);
//last index
console.log(arr[4])
console.log(arr.length - 1);

//Another way of declaring array
//its can take mix data
let arr1 = ["a", 1, 3.5];
console.log(arr1);

let arr2 = ["Virat", "Babar", "Sakib", "root"];
console.log(arr2);
//adding element from the back
arr2.push("Warner");
console.log(arr2);
//delete an element from the back
arr2.pop();
console.log(arr2);
//insert element from the front 
arr2.unshift("Tamim");
console.log(arr2);
console.log(arr2[0]);
//delete element from the front
arr2.shift()
console.log(arr2);
//sorting an array in ascending order
console.log(arr2.sort());
//check the element present in an array
console.log(arr2.includes("Babar"))

//for loop
let arr3 = ["Virat", "Babar", "Sakib", "root"];
for(let i = 0; i < arr3.length; i++){
    console.log(arr3[i])
}
let numbers = [12,13,14,16, 19];
let oddNumber = [];

for(let i = 0;i < numbers.length; i++){
    if(numbers[i]%2===1){
        oddNumber.push(numbers[i]);
    }
}

console.log(oddNumber)

//using of for each loop in js
//instead of : like java, we use in keyword in js

let arr4 = ["Virat", "Babar", "Sakib", "root"];

for(let i in  arr4){
    console.log(arr4[i])

}

//nested array in js
let arr6 = [['a', 'b'], [1,2]];
console.log(arr6)
//retrieving specific element from nested array
console.log(arr6[0][1]);

let arr7 = [1,2,3,4,5,6,7,8];
let evenNumbers = [];
for(let i = 0; i < arr7.length; i++){
    if(arr7[i]%2==0){
        evenNumbers.push(arr7[i])

    }
}

console.log("Before using filter(): " + evenNumbers)

//use of filter(), map(), redeuce() in array

//create a new array with even number and multiply with 3 then sum it

/*use of filter() in array.
The filter() method is an iterative method. It calls a provided callbackFn function 
once for each element in an array, and constructs a new array of all the values for which 
callbackFn returns a truthy value. Array elements which do not pass the callbackFn test 
are not included in the new array.

*/

//find the even numbers with filter()
let arr8 = [1,2,3,4,5,6,7,8];

let filterEvenNumbers2=arr8.filter((arr8)=>arr8%2==0);
console.log("After using filter(): "+ filterEvenNumbers2)

/*
The map() creates a new array populated with the result of calling a provided function 
on every element in the calling array.

*/
//create a new array with even number and multiply with 3 then sum it
//no () needed, if I have only parameter
//use of map()
let mappedArray = filterEvenNumbers2.map(arr8=>arr8*3)

console.log("After using map(): " + mappedArray)

/*
use of reduce();
The reduce() method is an iterative method. It runs a "reducer" 
callback function over all elements in the array, in ascending-index order, 
and accumulates them into a single value. Every time, the return 
value of callbackFn is passed into callbackFn again on next invocation as accumulator .

*/

let totalVal = mappedArray.reduce((sum, val)=>sum+val);
console.log("After using reduce(): " + totalVal)

//use of foreach()
//using one parameter
let arr9 = [42,51,98,65,12];
arr9.forEach(v=>{
    console.log(v)
})

//using 3 parameters with for each
arr9.forEach((v, i, a) =>{
    console.log(v, i, a)
})























