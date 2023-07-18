//String, int,byte,short,long,char,float,boolean


//There are 3 types variable in javaScript
// let, var, const


console.log("-----------use of var-------------")

//we can reassign and redeclare value with var
var firstName = "Sakib";
var age = 35;
var grade = 3.5;
var usCitizen = false;
var sex = 'M';
//check the type of variable 
console.log(typeof(age));
console.log(typeof(usCitizen));
//redeclare variable with var
var firstName = "Tamim";
console.log(firstName)

//reassign the value with var
grade = 3.1;
console.log(grade)


console.log("-----------use of let-------------")
// we can't redeclare but we can reassign the value with let
let firstName1 = "Tamim";
//let name = "Iqubal";
//undefined value
let lastName = "";
let age1 = 35;
let grade1 = 3.5;
let usCitizen1 = '';
let sex1 = 'M';

console.log(firstName1)
console.log(lastnName)
console.log(usCitizen1)


//we can't redeclare variable with let
//let firstName = "Afif";

//reassign the value with let
firstName1 = "Musfiq";
console.log(firstName1);

console.log("-----------use of const-------------")
//we can't neither redeclare or reassign const variable
const firstName2 = "Sakib";
const age2 = 35;
const grade2 = 3.5;
const usCitizen2 = false;
const sex2 = 'M';

console.log(age2)

/*
we can't reassign value with const variable
firstName2 = "Shoan";
console.log(firstName2);
*/

/*
we can't redeclare value with const
const firstName2 = "Afif";
*/



