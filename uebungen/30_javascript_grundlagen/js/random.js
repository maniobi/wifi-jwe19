var randomBodyParts = ['Face', 'Nose', 'Hair'];
var randomAnimalBodyParts = ['Tail', 'Feet', 'Back'];
var randomAdjectives = ['smells', 'tastes', 'looks'];
var randomAnimals = ['Fly', 'Bird', 'Cat', 'Rat'];


var randomBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];


var sentence = "Your " + randomBodyPart +
    " " + randomAdjective + 
    " like the " + randomAnimalBodyPart + " of a " + randomAnimal
    