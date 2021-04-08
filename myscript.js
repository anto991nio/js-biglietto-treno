var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
var kmPercorsi = parseInt(prompt("Quanti km devi percorrere?"));

console.log( etaPasseggero , kmPercorsi );

var prezzoKm = 0.21;
var prezzoBiglietto = kmPercorsi * prezzoKm;



if (etaPasseggero < 18 ){
    console.log( prezzoBiglietto - prezzoBiglietto * 0.20 )
} 


else if (etaPasseggero > 65) {
    console.log( prezzoBiglietto - prezzoBiglietto * 0.40 )
}

else{
    console.log(prezzoBiglietto);
}





