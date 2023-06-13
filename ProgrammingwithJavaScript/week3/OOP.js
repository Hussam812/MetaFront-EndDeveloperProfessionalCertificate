var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total price:", calculation);
    }
}

purchase1.totalPrice();
console.log(purchase1.stateTax);


var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation);
    }
}


purchase2.totalPrice();
console.log(purchase2.shoes);
