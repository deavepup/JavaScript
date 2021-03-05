// Strings

const firstName = 'Hüseyin';
const lastName = "Dönmez";
let hobbies = 'dizi müzik oyun yazılım';
const age=21;

let val;

// string concatenation

val = firstName +" "+ lastName;
val = 'Hüseyin';
val +=' Dönmez';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' Antalya\'da yaşıyorum.';

//string concat
val = firstName.concat(' ',lastName);

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// string replace
val = '  '+val.replace('Den','Deneme')+'     ';

// trim
val = val.trim();

// substring 
// val = val.substring(3,8);

// slice
// val = val.slice(6); 

//val = val.indexOf('x');

//val = val[1];

//string length
//val = val.length;

val =hobbies.split(' ')

console.log(val);
console.log(typeof val);