// Control Flow membutuhkan Pengulangan & Pengkondisian

// Pengulangan while pada JS
// while (kondisi) {aksi}

/*var ulang = true;
while (ulang) {
  console.log('Hello World!');
  ulang = confirm('lagi?');
} */ // berhenti oleh user 

/*
var nilaiAwal=1;
while (nilaiAwal<=5) {
  console.log('Hello World!');
  nilaiAwal++;
}*/ // berhenti oleh program

/* var nilaiAwal=1;
while (nilaiAwal<=5) {
  console.log('Hello World ' + nilaiAwal + 'x');
  nilaiAwal++;
}*/

// Juragan Angkot 1 - Pengulangan while
/*var noAngkot=1;
while(noAngkot<=10) {
  console.log('Angkot No. ' +noAngkot+ ' beroperasi dengan baik.');
noAngkot++;
}*/

// Pengulangan for pada JS
// for(  ;  ;  ) { }

/*for(var nilaiAwal=1; nilaiAwal<=10; nilaiAwal++){
  console.log('Hello World!')
}; */

// Juragan Angkot 2 - Pengulangan while dan for
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot<=angkotBeroperasi){
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  noAngkot++;
}

for(noAngkot>angkotBeroperasi; noAngkot<=jmlAngkot;noAngkot++){
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
}

