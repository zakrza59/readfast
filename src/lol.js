var x = document.getElementById('x');
var a = "Ala ma kota";
var b = a.split(" ");
var c = b.length;
var i = 0;

(function lool() {
   
    if (++i < b.length) {
        console.log(b[i])
        setTimeout(lool, 1000);
    }
})();