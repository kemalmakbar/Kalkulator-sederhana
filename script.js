// Fungsi ini menghapus semua nilai
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// Fungsi ini menampilkan nilai
function display(value) {
    document.getElementById("result").value += value;
}
 
// Fungsi ini mengevaluasi operasi bilangan dan menampilkan hasil
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
