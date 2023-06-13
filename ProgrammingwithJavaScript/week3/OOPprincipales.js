class Animal{};
var myDog = Object.create(Animal);
console.log(Animal);


var myCAt = Object.create(Animal)

//class Bird extends Animal{};
//class Eagle extends Bird{};
//console.log(Eagle);



console.log("abc".toUpperCase());


const bicycle ={
    bell: function(){
        return "Ring, ring! Watch out, Please!";
    }
}

const door ={
    bell:function(){
        return "Ring, ring! Come here, Please";
    }
}


console.log(bicycle.bell());


function ringTheBell(thing){
    console.log(thing.bell());
}

ringTheBell(bicycle);
ringTheBell(door);

console.log("abc".concat("def")); // 'abcdef')

console.log(["abc"].concat(["def"])); // ['abc', 'def']); // 'abcdef')
console.log(["abc"] + ["def"]); // 'abcdef')


class Bird{
    useWings(){
        console.log("Flying!")
    }

}

class Eagle extends Bird{
    useWings(){
        super.useWings()
        console.log("Barely flapping")
    }
}

class Penguin extends Bird{
    useWings(){
        console.log('Diving!')
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();