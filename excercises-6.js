======================================================================
Skeleton Code looping dengan menggunakan While 

var a = 22
var b = 2 

console.log('LOOPING PERTAMA')

while (b < a){
    console.log(b + ' - I love coding ')
b = b + 2
}

console.log('LOOPING KEDUA')

var a = 20
var b = 0

while (a > b){
    console.log(a + ' I will become fullstack develope')
a = a - 2
}

====================================================================
Skeleton Code looping dengan menggunakan For  

console.log('LOOPING PERTAMA')

for(i=1; i<21; i++)
{
    console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA')

for(i=20; i>0; i--)
{
    console.log(i + ' - I will become fullstack develope');
}

---------------------------------------------------------------------

for(i=1; i<100; i++){
    if (i % 2 === 0) {
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
    } 

for(i=1; i<100; i+=2){
    if (i % 3 === 0) {
        console.log(i + ' Kelipatan 3')
    } else {
        console.log(' ')
    }
    }

for(i=1; i<100; i+=5){
    if (i % 6 === 0) {
        console.log(i + ' Kelipatan 6')
    } else {
        console.log(' ')
    }
    }

for(i=1; i<100; i+=9){
    if (i % 10 === 0) {
        console.log(i + ' Kelipatan 10')
    } else {
        console.log(' ')
    }
    }

