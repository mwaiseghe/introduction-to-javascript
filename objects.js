let car = {
    id:1,
    type: 'Crossover',
    model: 'Audi RS8',
    year: '2021',
    getAge: function(){
        console.log(2023-Number.parseFloat(this.year))
    }
        
}

car.id = 2

console.log(car)

car.seats = 6;

console.log(car)

// deleting
delete car.seats;

console.log(car)

// checking if a key exist
console.log("type" in car);
console.log("seats" in car)
car.getAge()