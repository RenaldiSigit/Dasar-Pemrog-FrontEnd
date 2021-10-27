function Tampil() {
    Event.preventDefault;
    let nama =  document.Form1.inputNama.value
    let Mail = document.Form1.inputEmail.value
    let gender = document.Form1.gender.value
    let agama = document.Form1.agama.value
    let alamat = document.Form1.Alamat.value

    document.getElementById("Tampil").innerHTML = (
        "Nama Lengkap   : " + nama + "<br>" +
        "Email  : " + Mail + "<br>" +
        "Jenis Kelamin  : " + gender + "<br>" +
        "Agama  : " + agama + "<br>" +
        "Alamat : " + alamat + "<br>"
    );
}
//Function title berjalan
var txt = "DP-Front-End_Live Update Formulir";
var speed = 500;
var refresh = null;
function action() {
  document.title = txt;
  txt = txt.substring(1, txt.length) + txt.charAt(0);
  refresh = setTimeout("action()", speed);
} action();