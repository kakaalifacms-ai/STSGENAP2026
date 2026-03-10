let tugas = [];
let barang = [];
let stok = [];
let tabungan = [];

/* DAFTAR TUGAS */

function tambahTugas() {
  let input = document.getElementById("tugas").value;
  
  if (input != "") {
    tugas.push(input);
    document.getElementById("tugas").value = "";
    tampilTugas();
  }
}

function hapusTugas() {
  tugas.pop();
  tampilTugas();
}

function resetTugas() {
  tugas = [];
  tampilTugas();
}

function tampilTugas() {
  
  let list = document.getElementById("list");
  if (!list) return;
  
  list.innerHTML = "";
  
  for (let i = 0; i < tugas.length; i++) {
    list.innerHTML += "<li>" + tugas[i] + "</li>";
  }
  
  document.getElementById("totalTugas").innerHTML =
    "Total Tugas : " + tugas.length;
}


/* STOK GUDANG */

function tambahBarang() {
  
  let nama = document.getElementById("barang").value;
  let jumlah = document.getElementById("stok").value;
  
  barang.push(nama);
  stok.push(Number(jumlah));
  
  tampilBarang();
}

function hapusBarang() {
  barang.pop();
  stok.pop();
  tampilBarang();
}

function resetBarang() {
  barang = [];
  stok = [];
  tampilBarang();
}

function tampilBarang() {
  
  let tampil = document.getElementById("tampilBarang");
  if (!tampil) return;
  
  let text = "";
  let total = 0;
  
  for (let i = 0; i < barang.length; i++) {
    
    text += "Barang ke-" + (i + 1) + " : " + barang[i] + " - Stok : " + stok[i] + "<br>";
    total += stok[i];
    
  }
  
  tampil.innerHTML = text;
  document.getElementById("totalBarang").innerHTML =
    "Total Seluruh Barang : " + total;
}


/* TABUNGAN */

function tambahSetoran() {
  
  let uang = document.getElementById("setor").value;
  
  tabungan.push(Number(uang));
  
  tampilTabungan();
}

function hapusSetoran() {
  tabungan.pop();
  tampilTabungan();
}

function resetTabungan() {
  tabungan = [];
  tampilTabungan();
}

function tampilTabungan() {
  
  let riwayat = document.getElementById("riwayat");
  if (!riwayat) return;
  
  let text = "";
  
  for (let i = 0; i < tabungan.length; i++) {
    text += "Setoran ke-" + (i + 1) + " : Rp " + tabungan[i] + "<br>";
  }
  
  riwayat.innerHTML = text;
}

function cetakSaldo(){

let hasil=document.getElementById("hasil");
if(!hasil) return;

let total=0;
let text="=== BUKU TABUNGAN ===<br><br>";

for(let i=0;i<tabungan.length;i++){

let uang = Number(tabungan[i]);

text+="Setoran ke-"+(i+1)+": Rp "+uang+"<br><br>";

total += uang;

}

text+="-------------------------------------------<br><br>";
text+="Total Setoran Pokok: Rp "+total+"<br><br>";

let bonus=0;

if(total>=1000000){
bonus = total * 0.07;
text+="Bonus: Rp "+bonus+" (Selamat! Anda mendapat bonus 7%)<br><br>";
}else{
text+="Bonus: Rp 0<br><br>";
}

let saldo = total + bonus;

text+="SALDO BERSIH: Rp "+saldo;

hasil.innerHTML=text;
}

