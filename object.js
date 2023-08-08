let players = {
    firstName : 'Joe',
    lastName : "Root",
    country : "England"
}



console.log(players);
//add an element from outside
players.gender = "Male";
console.log(players)
players.ranking = 2
console.log(players)
//delete an element from outside
delete players.ranking;
console.log(players)

//another object 
var car = {
    brand : "Toyota",
    model : 2023,
    make : 'Rav4',
    color : ["White", "red", "silver"]
}

//accessing single element from the object
console.log(car['make']);
console.log(car['color'])
console.log(car)

//accessing multiple elements from the object
console.log(car['brand'] + " " + car['model']);