


function AddData()
{
    const name=document.querySelector("#name");
    const email=document.querySelector("#email");
    const number=document.querySelector("#number");
    const password=document.querySelector("#password");
    const gender=document.querySelector("#gender");

    const h2=document.createElement('h2');
    
    const details=document.querySelector("#details");

    const p1=document.createElement("p");
    const p2=document.createElement("p");
    const p3=document.createElement("p");
    const p4=document.createElement("p");
    const p5=document.createElement("p");

    h2.innerText="Your details:";

    details.appendChild(h2);

    p1.innerHTML= "Name : "+name.value ;
    h2.appendChild(p1);

    p2.innerHTML= "Email : "+email.value ;
    h2.appendChild(p2);

    p3.innerHTML= "Contact : "+number.value ;
    h2.appendChild(p3);

    p4.innerHTML= "Password : "+password.value ;
    h2.appendChild(p4);

    p5.innerHTML= "Gender : "+gender.value ;

    h2.appendChild(p5);
    
   
}