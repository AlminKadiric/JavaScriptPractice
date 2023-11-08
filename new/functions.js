function add(x,y){
    if(typeof y == "undefined"){
        return function(ry){
            return x + ry;
        }
    }
    return x+y;
}
console.log(add(3,5));
let add3 = add(3);
console.log(add3(5));
