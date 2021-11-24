/**********Arrays Declare******************/
//let arr=[];
let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.length);
let i=0;
//TO Print from 1 to 5
while(i<arr.length){
    console.log("element at index", i, "is", arr[i]);
    i++;
}

//Push, unshift
//Can put multiple type of array
arr.push("last value"); 
//push() method adds one or more elements to the end of an array and returns the new length of the array.
arr.unshift("first value");  
//unshift() adds new items to the beginning of an array.  The unshift() method overwrites the original array.
console.log(":```````````````````````````````");
console.log(arr);

/*****shift() removes items at the beginning of an array.********/ 
arr.shift();  
/*****pop() removes items at the end of an array.********/ 
arr.pop();

console.log(":```````````````````````````````");
console.log(arr);


/*****************Slice of Array *******************/
//Start idx, Last idx
let partOfArray = arr.slice(2,4);
let partOfArr = arr.slice(-2);
let partOfAr = arr.slice(-1);
console.log(":```````````````````````````````");
console.log(partOfArray); //[ 3, 4 ]
console.log(partOfArr); //[ 4, 5 ]
console.log(partOfAr); //[ 5 ]

