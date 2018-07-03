
var nama = 'Anis';
var peran = 'Ksatria';

if(peran === '' && nama ) { 
  console.log('Hallo' + nama + ', Pilih peranmu untuk memulai game!');
} else if(peran === 'Ksatria') {
  console.log('Selamat Datang di Dunia Proxytia,' + nama);
  console.log('Hallo' + ' ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'Tabib') {
  console.log('Selamat Datang di Dunia Proxytia,' + nama);
  console.log('Hallo' + peran + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (peran === 'Penyihir') { 
  console.log('Selamat Datang di Dunia Proxytia,' + nama);
  console.log('Hallo' + peran + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log('Nama harus diisi!');
}
