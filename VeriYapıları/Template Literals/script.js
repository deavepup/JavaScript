// Template  Literals

const fullName = 'Hüseyin Dönmez';
const city = 'Antalya';
const yearOfBirth = 2000;

let val;


val = 'my name is '+fullName+
      ' I\'m '+(2018-yearOfBirth)+' years old '+
      ' and I live in '+city;

      //Template Literals
val = `my name is ${fullName} I'm ${(2018-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;


console.log(val);

