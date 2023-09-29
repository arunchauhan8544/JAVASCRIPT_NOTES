const names=["arun","nura","tarun"];//creation of an array
console.log(names[0]);
const vars=new Array("saab","volvo","bmw");
console.log(vars);
console.log(names.toString());//convert array to string
console.log(names);
names.push("ashish");//add element
console.log(names);
console.log(names.length);// js array length
console.log(names.pop());
//array concatenation
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
names.splice(2,0,"shreya","dk");//splice method
console.log(names);
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);//slice method
console.log(citrus);
console.log(names.sort());//sort an array
console.log(names.reverse());//reverse an array