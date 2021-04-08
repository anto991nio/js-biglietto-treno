var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
var kmPercorsi = parseInt(prompt("Quanti km devi percorrere?"));

console.log( etaPasseggero , kmPercorsi );

var prezzoKm = 0.21;
var prezzoBiglietto = kmPercorsi * prezzoKm;


if(Number.isNaN (etaPasseggero) || Number.isNaN(kmPercorsi)){
    alert("Dati immessi non corretti")
}else{

    if (etaPasseggero < 18 ){
    console.log( prezzoBiglietto - prezzoBiglietto * 0.20 )
    document.getElementById("Biglietto").innerHTML = "Il costo del biglietto è "+ "" + (prezzoBiglietto - prezzoBiglietto * 0.20 ) ;
    } 


    else if (etaPasseggero > 65) {
    console.log( prezzoBiglietto - prezzoBiglietto * 0.40 )
    document.getElementById("Biglietto").innerHTML = "Il costo del biglietto è "+ "" + (prezzoBiglietto - prezzoBiglietto * 0.40 ) ;
    }

    else{
    console.log(prezzoBiglietto);
    document.getElementById("Biglietto").innerHTML = "Il costo del biglietto è "+ "" + prezzoBiglietto ;
    }
}







