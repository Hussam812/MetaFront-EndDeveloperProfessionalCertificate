var bird = {
    hasWings: true,
    canFly: true, 
    hasFeathers: true
}


var eagle1 = Object.create(bird);

console.log("eagle1:", eagle1);
console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can flay:", eagle1.canFly);
console.log("eagle1 has Feathers:", eagle1.hasFeathers);


var eagle2 = Object.create(bird);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
penguin1.hasFeathers = false;
console.log("penguin1:", penguin1);
console.log("penguin1 can fly:", penguin1.canFly);
console.log("penguin1 has feathers:", penguin1.hasFeathers);

