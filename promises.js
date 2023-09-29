let getarun=()=>{
    return new Promise((resolve,reject)=>{
        resolve("some data");
    })
}
getarun().then((data)=>{
    console.log(data);
    console.log("arun chauhan");
}).catch((error)=>{
    console.log(error);

})