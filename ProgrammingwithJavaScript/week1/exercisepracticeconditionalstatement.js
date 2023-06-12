//are your old enough?
/*
1. Decale a vrible age using  the var keyword and set it to the number 10
2. Add an if statement that checks if the value of the age varible is greater than or equal to the number 65. Inside the if block, console.log
the senence: "You get your income from your pension"
3. Add an "else if", where you'll check if the value of the age is less than 65
and get greater than or equal to 18. inside this "else if" block, typw "console.log" and then "Each month you get a salary".
4.Add another :"else if", and this time check if the value of the age is under 18. inside the "else if" block, "type console.log" and then "you get an allowamce"
5.Add an "else" statement to capture any other value. inside the block, type
"console.log" and then "The value of the age vaeiable is not numerical"

 */
var age = 10; 
if (age >= 65 ){
    console.log("You get your income from your pension");
}else if( age < 65 && age >= 18){
    console.log("Each month you get a salary");
}else if ( age < 18 ){
    console.log("You get an allowance");
}else{
    console.log("The value of the age varible is not a numerical");
}

// code the days of the week program as a switch statement
/*
1.on the next line, define a new varible, name it day, and add set its value to "sunday".
2.Start coding a switch, add cases for every day of the week , starting with "monday", and ending with "sunday".
make sure to use string values for days.
Inside each case, for now, just add a console.log("Don something") and add a break; on the line below
4.At the very bottom of the switch statement, add the default case and add a console.log("there is no such day")
5.Finally, update the console.log  calls for each case, based on whatever activity you have on each of the days

*/

var day = "Sunday";
switch(day){
    case "Monday":
        console.log("swimming");
        break;
    case "Tuesday":
        console.log("play football");
        break;
    case "Wendesday":
        console.log("coding");
        break;
    case "Thursday":
         console.log("watch a movie");
        break;
    case "Friday":
         console.log("visit my mom");
        break;
    case "Saturday":
         console.log("meet a friend");
        break;
    case "Sunday":
         console.log("got to gym");
        break;
    default:
        console.log("There is no such a day")
}