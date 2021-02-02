// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var adi="Hüseyin";
var soyAdi="Dönmez";
var tckimlik=123456;
var siparisToplami=100.5;
var cinsiyet=false;//Erkek False Kadın True
var adresBilgisi={sehir:"Antalya",ilce:"Muratpaşa",adres:"Cumhuriyet"};//Object
var hobiler =["kod","kod"];//Arry

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var siparis1=Number('100');
var siparis2=Number('150');
var toplam = siparis1+siparis2;
console.log(toplam)

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var siparis3=Number('100.2');
var siparis4=Number('150.5');
var toplam2 = siparis3+siparis4;
console.log(toplam2);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.
var siparis5=parseInt('100.2');
var siparis6=parseInt('150.5');
var toplam3=siparis5+siparis6;
console.log(toplam3);

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.
const dogumYılı = 1986;
console.log(new Date().getFullYear()-dogumYılı);

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.
let course = 'Modern Javascript Kursu';
console.log(course.length)