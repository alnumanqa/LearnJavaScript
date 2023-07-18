/*
creating class in java
public class Car{

}

*/

//How we create class in javascript

class Car{
    /*declare variable with let, var, const
    //we can't initialize variable with let, const, var keyword directly inside the class body. 
    However, We can have variable with having the data type.
    */
     fullName = "Al Numan";

     /*
     creating constructor in java->
     public Car(){

     }

     */

     //creating constructor in javaScript
     //in javaScript we can have only one constructor either default or parametrize
     /*
     constructor(){
        console.log("default constructor")

     }
     */

     constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        console.log("I won " + year + " " + make + " " + model + " which is "+ color + " color");
     }

     /*
     creating method in java
     public void car(){
        //void type method
     }
     public int bike(){
        return 0;
        //return type method
     }
     */

     //Creating method in javaScript
     drive(){
        console.log("I drive the car")
     }

     break(){
        console.log("You step on the break")
     }

     add(a,b){
        return a+b;
     }

     initializingVariableInsideMethod(){
        let c = 5;
        const usCitizen = true;
        console.log(this.fullName)
     }
}

/*
Creating object in java
Car car = new CAr();
*/

//creating object in javaScript outside the body of the class
let car = new Car("Toyota", 'Camry', 2022, "White");
let bike = new Car("Honda", "cvr", 2023, "red");
car.drive();
bike.break();
console.log(car.add(10,15));
car.initializingVariableInsideMethod();

