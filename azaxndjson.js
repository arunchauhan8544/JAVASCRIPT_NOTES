//callbackhell
let todos=(resourse,callback)=>{
    let request= new XMLHttpRequest();
    console.log(request);
    request.addEventListener('readystatechange',()=>{
        if(request.readyState==4)
           {
            callback(undefined,request.responseText);
           }
           else{
            callback("error comes",undefined);
           }
    })
    //set up to request
    request.open("Get",resourse)
    
    
    //sending the request
    request.send()}
    
    console.log(6);
    todos("data.json", (error,data)=>
    {
        if(error)
        {
            console.log(error);
        }
        else{
            console.log(data);
        }
        
    })
    
    console.log(8);