// Objests 


//Objests -------
// used in order to store data in key value pairs 



let obj ={
           id:1,
           name:"saksham",
           age:22,
           hobby:["cricket","reading"]
         };


console.log(obj);
console.log(obj.name);//used in order to print a certain value from the object




// objects can also be stored inside of array and vice versa


let array=[
    {name:"a",age:21,id:1},
    {name:"b",age:22,id:2},
    {name:"c",age:23,id:3},
    
]
console.log(array);
console.log(array[1].name);//can be used in order to print a certain value of certain object inside of array


//we can also use map function in order to traverse the array and get what we want from the array or its objects

array.map((a)=>{
    console.log(a.name);    //here it is printing all the values having key "name"
})


//we can also use for of loop


for(let a of array){
    console.log(a["name"]);  //it is also printing all the values having "name"as their key
}




