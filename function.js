/*
A function is a block of code designed to perform 
a particular task.

*/

// function declaration 
function car(){
    console.log("Toyota")
}

//invoking/calling the function
car();

//function expression/ anonymous function
//use of return statement
let add = function(a,b){
    return a+b;

}
 console.log(add(5,6));
 let result = add(10,12);
 console.log(result);


//Another example of anonymous function
 let multiplyFunction = function(c,d){
    console.log(c*d);

 }

 multiplyFunction(2,2);

 //arrow function
 //This arrow function is added in es6 

 let add2 = (c,d) =>{
    return c+d;
}

let val1 = add2(5,6)
console.log(val1)

let val2 = (e,f)=> e*f;
console.log(val2(2,2))