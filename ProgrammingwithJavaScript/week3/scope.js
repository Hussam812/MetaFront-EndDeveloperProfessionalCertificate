var num1 = 10;
function score(){
    console.log(num1);
}

score();

var globalVAr = "I'm in the global scope";
function scopeTest(){
    var localVar = "I'm scoped to the function";
}
