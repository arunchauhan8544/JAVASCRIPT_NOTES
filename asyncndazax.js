//asynchronous javascript
//async code example

console.log(1);
console.log(2);
console.log(3);

//async code
setTimeout(()=>{
    console.log("print after 5 sec");
},5000)//after 5 sec
console.log(3);
console.log(4);
//azax code//asynchronous example
//making http request(example)
let todos=(callback)=>{
let request= new XMLHttpRequest();
console.log(request);
request.addEventListener('readystatechange',()=>{
    if(request.readystate==4)
       {
        console.log(undefined,request.responseText);
       }
       else{
        console.log("error comes",undefined);
       }
})
//set up to request
request.open("Get","https://jsonplaceholder.typicode.com/todos")


//sending the request
request.send()}

console.log(6);
todos((error,data)=>
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(data);
    }
})
console.log(7);
console.log(8);