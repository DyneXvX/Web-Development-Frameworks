class Animal{
    type: 'Dog'|'Cat'|'Mouse'
    constructor(animalType: 'Dog'|'Cat'|'Mouse')
    {
        this.type=animalType;
    }

    Speak()
    {
        console.log('Meark')
    }
    
}

class Dog extends Animal{
    legs:number
    constructor(leg:number)
    {
        super('Dog');
        this.legs=length
        
    }

    Speak()
    {
        console.log('BowWow');
        super.Speak();
    }
}

let scout = new Dog(4);
scout.Speak();
let genericAnimal = scout as Animal;
genericAnimal.Speak();