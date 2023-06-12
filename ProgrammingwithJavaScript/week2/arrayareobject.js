var fruits = [];
fruits.push("apple");
fruits.push("pear");
fruits.pop();
console.log(fruits);


function arrayBuikder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr =arrayBuikder('apple', 'pear', 'plum');
console.log(simpleArr)