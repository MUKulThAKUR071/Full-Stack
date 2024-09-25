//string and functions related to strings----


// 1. concat() 
//  function used in order to add a string at the end i=of another string 

const a="hello ";
const b="world";
console.log(a.concat(b));
 
//2. replace and replaceAll
// function used in order to replace a character or a sub-string from a string

console.log(a.replace("l","v"));
console.log(a.replaceAll("l","n"))

//3. search()
// gives the index of the character enterd

console.log(b.search('r'));

//4. toLowerCase() and toUpperCase()
//functions used in order to turn the string to either lower caase or upper case

console.log(a.toUpperCase());
console.log(b.toLowerCase());

//5. split()
// used in order to convert the string into array and split it based on the given character

const c="how are you doing";
console.log(c.split());
console.log(c.split(" "))//will split the string based on the white spaces in the string


//6 trim()
// used in order to delete or remove white spaces from start and end of the string

const d="     hello";
console.log(d);
console.log(d.trim());


//7 substring( start,end) and slice()
// substring used in order to get a substring out of a given string It takes two arguments first one tells us where to start and second one tells us where to end it includes the starting character and excludes the endig character
// slice works just as substring but it also takes -ve indices as arguments


console.log(a.substring(1,4));
console.log(a.slice(-4,-1));

//8. startWith()
// checks whether the starting of the string contains the provided substring or not and gives a boolean value 

console.log(a.startsWith("hel"));

//9. endsWith()
//checks whether the ends of the string contains the provided substring or not

console.log(a.endsWith("lo "));

//1. includes()
// checks whether yhe given string contains the provided substring or not

const e = "hello world how are you doing";
console.log(e.includes("orld"));
