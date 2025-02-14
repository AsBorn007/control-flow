// // /// False Value

// // false ,0 ,-0, BigInt 0n, "",  null, undefined, NAN,

// // //Truthy Value

// // "0",'false', " ", [], {},function(){}


// // check if aarya is empty 
// let emptyArray = [];
// if (userlogedIn.lenght === 0){
//     console.log("Array is emptty")
// }
// // check if aarya is empty 
// let emptyObject = {};
// if (Object.emptyObject(keys).lenght === 0){
//     console.log("Array is emptty")
// }

// //
// false == 0 //true
// false == "" //ture
// 0 == '' // ture





// let value = "hello" // this gave us truthy value 
// let falseValue = "" // this gave us flase value 
// let truthyValue = [] // this gave us truthy value 

// if(value){
//     console.log("got the value");
// }else{
//     console.log("don't get the value");
// }
// if(falseValue){
//     console.log("got the value");
// }else{
//     console.log("don't get the value");
// }
// if(truthyValue){
//     console.log("got the value");
// }else{
//     console.log("don't get the value");
// }




// Nullish colescing operator value (??): null undefined
let val1;
val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 5 ?? 10;
console.log(val1);