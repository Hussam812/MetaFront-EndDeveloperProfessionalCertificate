var car = {};
car.color = 'red';


var car = {};

car.color = 'red';

car.turnKey = function(){
    console.log('engine running');
}


car.mileage = 98765;
console.log(car);

car.lightOn = function(){
    console.log("The lights are on.");
}

console.log(car);
console.log(car.turnKey());
console.log(car.lightOn());