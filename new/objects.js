let car = {wheels:4,doors:5,model:"Model 3",make:"tesla"};
car.mileage = 50;



//car.drive = function(km) {this.mileage +=km;}

function Car(wheels,doors,model,make){
    this.wheels = wheels;
    this.doors = doors;
    this.model = model;
    this.make = make;
    this.mileage=0;
    this.drive = function(km){this.mileage +=km}
    
}
mineCar = new Car(4,5,"Model 3","Tesla");
myOtherCar = new Car(4,5,"Prius Prime","Toyota");
console.log(mineCar.constructor);
