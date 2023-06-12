var user = {};
var assistantManger ={
    rangeTilesPerTurn: 3,
    socialSkills:30,
    streetSmarts:30,
    health:40,
    specialAbility: "young and ambitious",
    greeting: "Let's make money"
}

var table = {
    legs: 3,
    color: "brown",
    priceUSD:100,
}

//console.log(table);

//console.log(table.color);

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

//console.log(house);
house.windows = 10;
//console.log(house);


house.windows = 11;
//console.log(house);

//litterals and brackets Notation
var house2 = {};
house2["rooms"] = 4;
house2['color'] = 'pink';
house2['priceUSD'] = 123;
console.log(house2);

var car = {};
car.color = "red";
car['color'] = 'green';
car['speed'] = 200;
car.speed = 100;
console.log(car);

car['2022'] = 1901;
console.log(car);


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed:100,
    altitude: 200,
    color: 'red'
}


for(var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]]);
}