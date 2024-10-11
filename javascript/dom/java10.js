//accessing html elements using js


// 1. using getElementById,getElementByClassName,getElementByTagName 


const a=document.getElementById('heading');
const b= document.getElementsByClassName('words');
const c= document.getElementsByTagName('p');
console.log(a,b,c);



// 2. using querySelector and querySelectorAll



const val=document.querySelector('#heading');//used to access the element using "id"
const val1=document.querySelectorAll('.words');//used to access the element using "class"
const val2=document.querySelector('p');// used to access the element using Tag Name