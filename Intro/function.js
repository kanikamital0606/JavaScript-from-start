/**************************Example 1******************** */
//function definition 
function sayHi(param){
    console.log("Hello");
    console.log("Param Recieved",param);
}
//function declaration 
sayHi(100);              //Output=> Hello; Param Recieved 100
sayHi("I am Kanika");    //Output=> Hello; Param Recieved I am Kanika
sayHi([5,10,16,19,88]);  //Output=> Hello; Param Recieved [ 5, 10, 16, 19, 88 ]

/**************************Example 2******************** */
//function definition 
function sayHi(param){
    let rVal = Math.random() > 0.5 ? true : "less then 0.5"
    return rVal;
}
//function declaration 
let rVal = sayHi([1,5,10,25,66,89]);
console.log("rVal", rVal);
