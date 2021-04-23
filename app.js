const createInstructor = (firstName, lastName) => ({firstName, lastName});

let  favoriteNumber = '42';
const instructor1 = {
    firstName: "Colt",
    [favoriteNumber]: 'That is my favorite!'
}

var instructor2 = {
    firstName: "Colt",
    sayHi(){ return "Hi!";},
    sayBye(){return this.firstName + " says bye!";}
}

function createAnimal(specis, verb, noise){
    return {specis:specis,
            [verb](){return noise;}}
};