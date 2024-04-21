
function displayResult(result){
    console.log(result); //logs result - 6
}

function calculateSum(a, b, callback){ //fn invokes here - 2
    setTimeout(function(){ // waits for 2sec - 3
        let sum = a+b; // sum is done - 4
        callback(sum); //calls displayResult callback fn that has result argument  - 5
    }, 2000);
}

calculateSum(6,4, displayResult); //first fn calls here - 1

//shiva coocks rice
//gopi cuts vegitables
//pavan cooks curry


function makeRice(status1){
    console.log(status1);
}

function cutVegitables(status2){
    console.log(status2);
}

function coockTamatoRice(callback1, callback2){
    callback1("shiva coocked rice");
    callback2("gopi chopped vegitables");
    console.log("pavan prepared tamato rice");

}

coockTamatoRice(makeRice, cutVegitables);