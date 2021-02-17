//Date Onject
// Date fonksiyonu  aa/gg/yyyy formatında zamanı almaktadır.

let d = new Date(); //Şu anki tarih ve saat bilgisini verir.

//Set Methods
d.setFullYear(2022);//Yıl bilgisini değiştirir.
d.setMonth(04);//Ay bilgisini değiştirir.
d.setDate(21);//Ayın gün değerini değiştirir.
d.setHours(10);//Saat bilgisini değiştirir.



//Get Methods
console.log(d.getDate()); //Ayın gününü verir (1-31)
console.log(d.getDay()); //Haftanın gününü verir (0-6)
/*  
    getDay fonksiyonu haftanın kaçıncı gün (0-6) olduğu bilgisini verir.
    JavaScript haftanın ilk gününü Pazar kabul eder.
    
    getDate(): Geçerli tarihteki ayın gün değerini döndürür (1-31)

*/
console.log(d.getFullYear());//Yıl bilgisini verir.
console.log(d.getHours());//Şu anki saat bilgisini verir.

console.log(d.getMonth());//Ay bilgisini verir(0-11) Ocak=0
console.log(d.getSeconds());//Saniye bilgisini verir.

console.log(d);
console.log(typeof d); //typeof değişkenin türünü belirtir.