// Functions-----

// 1 simple functions

function table(a)
{
  console.log("table for "+a+" is:");
  for(let i=1;i<11;i++)
  {
    console.log(a+" X "+i+": "+a*i);
  }
}
table(3);



// 2. anonymous functions
// these functions does not have any declared name and are mostly used as callback functions and can be stored in a variable

const a = function ()
     {
        console.log("hello"); 
     }

console.log(a) ;

a();    // here the function has been stored in variable a and it is then used in order to call the function



//3. arrow function 
// it is simple a type of anonymous function and is just a shorter version of it
 
const b = (a)=>23*a; // this way of defining function is easier as it directly returns the value after the arrow .
const c=b(10);
console.log(c);
console.log(b(10));




//4. Self Invoking Function
//it is aa function which is invoked directly without any function call
// ()()

(function (){

    console.log("hello world again !!!");
})();



((a,b,c)=>{
     console.log(a*b*c);
})(10,20,30);       //we can also pass arguments in this and can be used in any type of function.



//5. Call-Back function
//It is the function which is passed as a argument or parameter to another function.

function demo(a)
{
    console.log(a);

    a();   // in order to call the call back function we must call it using the variable in which it is stored else it will give error

    console.log("demo is called");

}

demo(()=>
    {
        console.log("this is a arrow function being used as a call back function")
    });    // here the arrow function is passed as parameter to demo function


