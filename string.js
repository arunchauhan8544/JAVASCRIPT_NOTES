let firstName="Arun";
console.log(firstName[1]);//string indexing
let lastName="   Chauhan   "
console.log(lastName);
let newString=lastName.trim();//trim()
console.log(lastName.length);//length()
console.log(newString.length);
let text="abcdEfgHijkLMn";
console.log(text.toUpperCase());//toUpperCase()
console.log(text.slice(4,8));//string slice()
//convert string to a number
let num=+"abcdEfgHijkLMn";
console.log(typeof(num));
console.log(typeof(text));
//convert number to string
num=num+""
console.log(typeof(num));
num=Number(num);
console.log(typeof(num));
num=String(num);
console.log(typeof(num));
let text2="welome to js";
let newtext=text2.replace("js","css");
text3= "Hello" + " " + "World!";//string concatination
console.log(text3);
newarr1=text3.split(" ");
console.log(newarr1[1]);
let arun=`arun chauhan`;//template literals
console.log(arun);
let text4= `Welcome ${text2}, ${arun}!`;
console.log(text4);