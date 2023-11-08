let ages = [23,31,17,7];

function checkAge(age) {
    return age > 17;
}



let functVar = function(age){
    return age > 17;
}


var age = [23,32,17,7];
adults = age.filter((a) =>{return a > 17});
console.log(adults)
