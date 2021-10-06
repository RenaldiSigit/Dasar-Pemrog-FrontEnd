let bangun = Number(prompt('Pilih bangun datar anda !!!(Ketikan Nomor)\r\n1.Persegi \r\n2.Persegi Panjang \r\n3.Segitiga Sama Sisi \r\n4.Trapesium Sama kaki \r\n5.Lingkaran \r\n6.Jajar Genjang \r\n7.Belah Ketupat \r\n8.Layang-layang '))

if (bangun == 1) {
    let s = Number(prompt("Masukkan ukuran sisi (Satuan cm)"));
    let luas = luasPersegi(s);
    let keliling = kelilingPersegi(s);

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 2) {
    let p = Number(prompt("Masukkan ukuran panjang (Satuan cm)"));
    if (p == null) {
        let s = Number(prompt("Masukkan ukuran sisi (Satuan cm)"));
    }
    let l = Number(prompt("Masukkan ukuran lebar (Satuan cm)"));
    let luas = luasPersegiPanjang(p, l);
    let keliling = kelilingPersegiPanjang(p, l);

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 3) {
    let a = Number(prompt("Masukkan ukuran alas (Satuan cm)"));
    let t = Number(prompt("Masukkan ukuran tinggi (Satuan cm)"));
    let luas = luasSegitiga(a, t);
    let keliling = kelilingSegitiga(a);

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 4) {
    let a = Number(prompt("Masukkan ukuran alas atas (Satuan cm)"));
    let b = Number(prompt("Masukkan ukuran alas bawah (Satuan cm)"));
    let t = Number(prompt("Masukkan ukuran tinggi (Satuan cm)"));
    let luas = luasTrapesium(a, b, t);
    let c = Number(prompt("Masukkan ukuran sisi miring (Satuan cm)"));
    let keliling = kelilingTrapesium(a, b, c, c)

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 5) {
    let r = Number(prompt("Masukkan ukuran radius (Satuan cm)"));
    let luas = luasLingkaran(r);
    let keliling = kelilingLingkaran(r)

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 6) {
    let a = Number(prompt("Masukkan ukuran alas (Satuan cm)"));
    let t = Number(prompt("Masukkan ukuran tinggi (Satuan cm)"))
    let sm = Number(prompt("Masukkan ukuran sisi miring (Satuan cm)"));
    let luas = luasJajarGenjang(a, t);
    let keliling = kelilingJajarGenjang(a, sm);

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 7) {
    let d1 = Number(prompt("Masukkan ukuran diagonal 1 (Satuan cm)"));
    let d2 = Number(prompt("Masukkan ukuran diagonal 2 (Satuan cm)"))
    let s = Number(prompt("Masukkan ukuran sisi (Satuan cm)"));
    let luas = luasBelahKetupat(d1, d2);
    let keliling = kelilingBelahKetupat(s);

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else if (bangun == 8) {
    let d1 = Number(prompt("Masukkan ukuran diagonal 1 (Satuan cm)"));
    let d2 = Number(prompt("Masukkan ukuran diagonal 2 (Satuan cm)"))
    let a = Number(prompt("Masukkan ukuran sisi miring 1(Satuan cm)"));
    let c = Number(prompt("Masukkan ukuran sisi miring 2(Satuan cm)"));
    let luas = luasLayang2(d1, d2);
    let keliling = kelilingLayang2(a, c);

    Tampil((args) => alert(`Luasnya adalah ${args[0]} cm\u00B2 & kelilingnya ${args[1]} cm`), luas, keliling);
} else {
    alert('Maaf,Kamu Belum Memilih Bangun Datar')
}
