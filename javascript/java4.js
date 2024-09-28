
// array and functions working with array -----



var arr = ["kullu","manali","shimla"];

console.log(arr);
console.log(typeof(arr))
console.log(arr.length)

console.log(arr[1][0])

// 1. at()
// will give us the element present at that index 
     
var arr = [10,20,30,40];
console.log(arr[-2])  // this will give a undefined as output as it does not take -ve index
console.log(arr.at(-3))


// 2. push() and pop()
// push() used in order to add a element at the end of the array and pop()used in order to remove element from end of the error

var a = ["kullu","manali","shimla"];
a.push("spiti");
a.push("jammu");
a.pop();
a.pop();
a.pop()
console.log(a);

// 3. unshift, shif() 
//unshift() used in order to add a element from the start of the array and shift() used in order to remove element from the start of the error 

var arr = ["kullu","manali","shimla"];

arr.unshift("spiti");
arr.unshift("jammu");
arr.shift();
arr.shift();
arr.shift();
console.log(arr)

// 4. Array.isArray()
//tells us whether the input is array or not
            
var a = [1,23,45];
var b = "komal"
console.log(Array.isArray(b));

// 5. includes()
//checks whether the array contains the given element or not

var a = [1,8,6,3];
console.log(a.includes(8))

var username = ["saurabh","sonam","anjali","sumit"];

if(username.includes("sumit"))
{
    console.log("login successfully")
}

else
{
    console.log("only admin can access")
}

// 6.indexOf
//gives us the index of the given element

var a = [1,55,66,32];
console.log(a.indexOf(32))

// 7. slice()
//used in order to slice a sub array from a array

var arr = [10,78,65,41,55,32,62,41];
console.log(arr.slice())
console.log(arr.slice(1,4))
console.log(arr.slice(-4,-2))



// 8. join()
//turns the array into a string

var arr = ["kullu","manali","shimla"];
console.log(arr.join(" "))

// 9. splice()
//removes certain elements from the array and add another in its place

var arr = [10,20,30,40,50,60];
arr.splice(2,3,"komal")
console.log(arr)

// 10. fill()
// is ued inorder to fill a element in place of other elements  of the array and its is to be provided that how many elements are to be replaced and from where      

var arr = [10,20,30,40,50,60];
arr.fill("komal",2,4)
console.log(arr)


            
// 11. reverse()
//reverse the position of the elements of the array
var arr = [10,20,30,40,50];
console.log(arr.reverse())

// 12. sort()
//used in order to sort an array in ascending order

var a = [1,55,6,32,77];
var a = ["kullu","manali","shimla","delhi","spiti"]
console.log(a.sort())

//3D arrays
var arr = [["kullu","shimla"],["spiti","jammu","kashmir"],["aman"]]
console.log(arr[0][1][0])
