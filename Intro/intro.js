//Print Js
console.log("Print Js node file name");

//Declare a Variable
let a;
console.log(a);  //OUTPUT => undefined

a =10;
a = 10.01;
a = "Hello I'm a String";

console.log("String Value is", a); //OUTPUT => String Value is Hello I'm a String

a = null;
console.log("String Value is", a); //OUTPUT => Null

/*Primitive Types 
 1. Number
 2. Boolean
 3. String
 4. NULL
 5. Symbol
*/

/************************************ CHECK IF NUMBER IS PRIME  ******************* */
let num = 88;
let flag = true;
for(let div = 2; div<=num; div++){
    if(num%div==0){
        flag = false;
        break
    }
}

if(flag==true){
    console.log(num,"is prime");
}
else{
    console.log(num,"is not prime");
}


/*Primitive Types 
 1. Functions
 2. Arrays
 3. Objects
*/

