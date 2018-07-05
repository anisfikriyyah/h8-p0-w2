function bandingkanAngka(angka1, angka2) {
    if (angka1>angka2){
        var nilai = 'false'
        return nilai 
    } 
        else if (angka1<angka2){
            var nilai = 'true'
            return nilai
        } 
            else {
                var nilai = '-1'
                return nilai
            } 
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
