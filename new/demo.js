function outer(){
    let message= "Can you see me?";

    function inner(){
        console.log(message);

    }
    return inner;

}

let result = outer();
console.log(result);
result();