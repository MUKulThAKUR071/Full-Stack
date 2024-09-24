// Use of else if ---

let marks=75;

if(marks>=90)
{
    console.log("your grade is:A+");
}
else if(marks>=85 && marks<90)
{
    console.log("your grade is: A");
}
else if(marks>=80 && marks<85)
{
    console.log("your grade is: B+");
}
else if(marks>=75 && marks<80)
{
    console.log("your grade is: B");
}
else
{
    console.log("you have failed the exam !!");
}


// Switch statement-----

let day=1;

switch(day){

    case 1 : console.log("monday");
     break;

    case 2 : console.log("tuesday");
     break;

    case 3 : console.log("wednesday");
     break;

    case 4 : console.log("thursday");
     break;

    case 5 : console.log("friday");
     break;

    case 6 : console.log("saturday");
     break;

    case 7 : console.log("sunday");
     break;

    default: console.log("wrong input");

}



// useful maths functions ---

// 1 Math.abs()
// 2 Math.floor()
// 3 Math.ceil()
// 4 Math..pow()
// 5 Math..random()


 console.log(Math.abs(-30)); 
//  always give +ve value


console.log(Math.floor(4.9));
// always give the lower integer value


console.log(Math.ceil(4.9));
//always give the higher or upper integer value 


console.log(Math.pow(2,4));
// helps in calculation the power of a number

console.log(Math.random());
// gives random values between o to 1 excluding 1


console.log(Math.ceil(Math.random()*6));
//can be used in oerder to get different numbers of the dice 