
// CALCULATOR USING ELSE IF STATEMENT 

let decide=prompt("do you want to do calculations? enter Y/N:");

let a;
let b;
let c;
let operation;

if(decide=="y"||decide=="Y")
    {
      a= Number(prompt("enter the a that is first number"));
      b= Number(prompt("enter the b that is second number"));
      operation = prompt("enter the operation you want to perform i.e (+,-,*,/)")
      if(operation=="+")
           {
           
             alert("the answer is:"+(a+b));
           }
        else if(operation=="-")
            {
           
              alert("the answer is:"+(a-b));
            }
        else if(operation=="*")
            {
               
              alert("the answer is:"+(a*b));
            }
        else if(operation=="/")
            {
             if (b==0)
                 {
                  alert(" Error!!! b cannot be equal to "+0);
                 }     
             else
                 {
                  alert("the answer is:"+(a/b));
                 }
            }
        else {
                alert("invalid input");
             }
    }
else
    {
      alert("thanks for your time!!")
    }    
