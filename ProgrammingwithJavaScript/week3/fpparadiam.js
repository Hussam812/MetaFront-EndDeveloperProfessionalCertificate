function getTotal(a, b){
    return a + b
}

var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);


function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance); 

// OOP

var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy);
virtualPet.nap();
console.log(virtualPet.sleepy);


function addTwoNum(a, b){
    console.log(a + b);
}

function randomNum(){
    return Math.floor((Math.random() *10) + 1);
}

function specificNum(){return 42};

var useRandom = false;
var getNumber;
if(useRandom){
    getNumber = randomNum
}else{
    getNumber = specificNum
}
addTwoNum(getNumber(), getNumber());