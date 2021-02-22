// Numbers

let val;

// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(6);
// val = num.toFixed(2);

val = Math.PI;//PI- pi sayısından geliyor 
val = Math.round(2.4);//round- yuvarlak, yuvarlamak demek, virgülden sonrası nereye yakınsa ona yuvarlıyor
val = Math.round(2.7);
val = Math.ceil(2.4);//ceil- tavan demek, virgülden sonra üstüne yani tavanına tekabül ediyor.
val = Math.ceil(2.6);
val = Math.floor(2.4);//floor-taban-alt, mantık yukarıdaki ile aynı 
val = Math.floor(2.7);
val = Math.sqrt(64);//sqrt- karesi, hangi sayının karesi 64 eder ? 
val = Math.pow(2,4);//pow-power--kuvvet, 2 nin 4üncü kuvveti anlamında
val = Math.abs(-100);//abs-absolute-mutlak,kesin- mutlak değer anlamına gelıyor mutlak degere ne sokarsan pozitif çıkar.

val = Math.min(1,2,3,2,4,9);//Kendisine parametre olarak gönderilen değerler arasında en küçük değeri getirir.
val = Math.max(4,5,6,4,98,7);//Kendisine parametre olarak gönderilen değerler arasında en büyük değeri getirir.
val = Math.floor(Math.random()*100+1);

console.log(val);
console.log(typeof val);