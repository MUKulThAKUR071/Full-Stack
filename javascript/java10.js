//Callback Hell

// const array=["abc","der","ghr"];

// array.cart(()=>{
//     array.proceed(()=>{
//         array.buy(()=>{
//             array.payment(()=>{
//                 console.log("payment sucessfull");
//             });
//         });
//     });
// }); 


// This is just a simple exammple of call back hell in this the function ued are not actually defined 
//callback hell is a structure which contains nested callback functions in a single function



const myPromise= new Promise((resolve,reject)=>{
    
    const sucess=true;
    if(sucess){
        resolve("promise resolved sucessfully");
    }
    else{
        reject("promise is not resolved ");
    }
})

myPromise.then((value)=>{
    console.log(value);
    return"next value";
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});
console.log(myPromise);