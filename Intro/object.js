//Object => Key Value Pair 

//Key : Value => value is property
//Key : function => method
let specialops = {
    name: "Himmat",
    lastname: "Singh",
    address: {
        city: "New Delhi",
        country: "India",
    },age:35,
    
    iswebSeries: true,
    webseries:["Mirzapur", "Squid Games", "Money Heist", "Criminal Justice"],
    sayHi: function(){
        console.log("He say Hello");

    }
};

/********Get Values of Key******/ 
console.log(specialops.name);
console.log(specialops.age);
console.log(specialops.webseries[1]);
specialops.sayHi();

/*******************Set/Update********************/

console.log("specialops", specialops);
specialops.age=36;
specialops.iswebSeries = false;
//to add new key, value
specialops.freind=["spy1", "spy2", "spy3", "spy4"];
console.log('``````````````````````');

/**************delete********************/
//delete ObjectName.key

delete specialops.addresses;
console.log("specialops", specialops);

/*************to acess all keys; apply for loop*************/
// for(let key in specialops){
//     console.log(key, ":", specialops[key]);
// }


/*********************to get Key from []***** */
let propKey="age";
console.log(specialops.age); //36
console.log(specialops[propKey]); //36
console.log(specialops["age"]); //36

//undefined
console.log(specialops.xyz);