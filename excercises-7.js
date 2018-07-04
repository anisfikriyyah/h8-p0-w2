====================================================================
Skeleton Code Menyusun Baris Bintang

var rows1 = 5;

console.log('jika rows1 = ' + rows1)

for(i=0; i<rows1; i++){
    console.log('*')
}

====================================================================
Skelton Code Menyusun Baris Bintang Dengan Nested Looping


for ( var i = 0; i <= 5; i++ ){
    var b = ''
    for ( var j = 0; j<=5; j++){
        b=b+'*'      
    }
    console.log(b)
}

====================================================================
Skeleton Code Menyusun Tangga Bintang Dengan Nested Looping 
 
var b = ''
  for ( var j = 1; j<=5; j++){
      b=b+'*'
      console.log(b)
  }
