function osszeadas() {
    var elsoSzam = document.getElementById("elsoSzam").value;
    var masodikSzam = document.getElementById("masodikSzam").value;
    var eredmeny = Number(elsoSzam) + Number(masodikSzam);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function kivonas() {
    var elsoSzam = document.getElementById("elsoSzam").value;
    var masodikSzam = document.getElementById("masodikSzam").value;
    var eredmeny = Number(elsoSzam) - Number(masodikSzam);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function szorzas() {
    var elsoSzam = document.getElementById("elsoSzam").value;
    var masodikSzam = document.getElementById("masodikSzam").value;
    var eredmeny = Number(elsoSzam) * Number(masodikSzam);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
function osztas() {
    var elsoSzam = document.getElementById("elsoSzam").value;
    var masodikSzam = document.getElementById("masodikSzam").value;
    var eredmeny = Number(elsoSzam) / Number(masodikSzam);
    document.getElementById("eredmeny").innerHTML = eredmeny;
}
