// Higher Order Functions

// 1. map
// 2. filter
// 3. reduce 
// 4. fill
// 5. sort
// 6. foreach 

const array=[10,30,25,65,13,76];

//1.Map
// used on array and takes a call back function which can take upto 3 arguments each argument gets different value from the array


 let a=array.map((a,b,c)=>
    {
        console.log(a,b,c); //here "a" gets the values of the array "b" gets the index and "c" gets the whole array
        //return a;    //returns whole array 
        return a/2;    //can also return a modified array
    })
 

    console.log(a);


//2.filter()
// similar to map function but cannot return modified array


a=array.filter((a,b,c)=>
    {
        console.log(a,b,c); //here "a" gets the values of the array "b" gets the index and "c" gets the whole array
        //return a;    //returns whole array 
        return a/2;    //cannot return a modified array
    })
 

    console.log(a);



//3.sort()
//is used to sort the araay in ascending or decending order and an only be used to sort  numbers


a=array.sort((a,b)=>
    {
        console.log(a,b);
        // return b-a;  //used to sort array in decensing order
        return a-b;  //used to sort the array in ascending order
    })

console.log(a);