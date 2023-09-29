//Javascript DOM(document object model)
//created by browseras the html load into the browser
//browser create object of html called "document object"
//in document object there is model of complete html in tree like structure
//console.log(document.URL);

//getting html elements using querySelector/All
//queryselector returns "first element" that matches css selector
//to get all matched selector we use querySelectorAll 

let ans=document.querySelector('p');
console.log(ans);
let ans2=document.querySelectorAll('p');//select all gives nodelist type
console.log(ans2);
let ans3=document.querySelector('#arun');
console.log(ans3);
//getElementsByTagName
let tagname=document.getElementsByTagName('p');
console.log(tagname);//this gives html collection type
//foreach method weill not work on collection.
//getElemntByClassName you can also use  this.
//getElemntById
let id=document.getElementById('arun');
console.log(id);
//updating and changing the content
//inner text,ignore spaces
//retrieve and set content in plain text
let heading=document.querySelector('.nve');
console.log(heading.innerText);

//innertext,it does not ignore spaces
//retrieve and set content in html formate
console.log(heading.innerHTML);
heading.innerText +="arunchauhan";//update
//if u dont want to delete previous text then add +
console.log(heading.innerText);
//getting and setting attribute of element
let htmldomlink=document.querySelector('a');
console.log(htmldomlink.getAttribute('href'));
//set the attribute
htmldomlink.setAttribute('href',"https://www.w3schools.com/css/default.asp");
console.log(htmldomlink.getAttribute('href'));
htmldomlink.innerText="css tutorial";
console.log(htmldomlink.innerText);
//adding the style
let color1=document.querySelector('h2');
color1.style.color="red";
color1.style.backgroundColor="yellow";

//add,remove and replace class of element
//this also helps to change css dynamically
let heading2=document.querySelector('h2');
heading.classList.add('newClass');
//remove the class
heading.classList.remove("newClass");
//replace the class
heading.classList.replace("nve","newClass");
//parent,children and sibiling elements
let parentElement=document.querySelector('.nura');
//all children of parent
console.log(parentElement.children);
//we can not run foreach method on html collection so
//first convert it into array
console.log(Array.from(parentElement.children));
Array.from(parentElement.children).forEach(function(element)
{
element.classList.add("coders");
})
let childElement=document.querySelector('.nve');

//console.log(childElement.parentElement);
//find next sibiling of child
//console.log(childElement.nextElementSibling);
//console.log(childElement.previousElementSibling);
//event basics(click event)
let eventElement=document.getElementsByClassName('checkme');
console.log(eventElement);
//addeventlistner
// eventElement.addEventListener("click", function(){
// console.log("clicked me")
// })
//form events(submit form)