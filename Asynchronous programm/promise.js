
let count = false;
let result = new Promise(function(resolve, reject){
    if(count){
        resolve("Promise success");
    }
    else{
        reject("Promise rejected");
    }
})

//console.log(result);
result.then(function resolve(result){
    console.log(result);
})
.then(function resolve(result){
    //do something multiple chaining
})
.catch(function reject(result){
    console.log(result);
})