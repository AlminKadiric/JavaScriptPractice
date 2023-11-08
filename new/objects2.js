let car = {wheels:4,doors:5,model:"Model 3",make:"tesla",
owner: {name:"John Doe", 
address: {street:"123 first street", city:"Springfield"}}};


for(let key in car){
    console.log(key + " " + car[key] + ",");

}