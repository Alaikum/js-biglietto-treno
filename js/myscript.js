

// Il programma dovrà chiedere all’utente il numero di 
// chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare
//  il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base 
// ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// chilometri da percorrere
const km = parseInt(prompt("Scrivi i chilometri che devi percorrere, perfavore"));
const distanza = document.getElementById("distanza");
distanza.innerHTML = km;
// età passeggero 
const eta = parseInt(prompt("Mi potresti dire quanti anni hai?"));
const anni = document.getElementById("anni");
anni.innerHTML = eta;


const prezzoIntero = km * 0.21

var prezzoScontato

if ((isNaN(km) || km<= 0) && (isNaN(eta) || eta<= 0)) {

    const errore = document.getElementById("errore");
    errore.innerHTML = 'HAI INSERITO UN VALORE IN KM ED IN ANNI NON VALIDO,RIPROVA PER FAVORE';


}

else if (isNaN(km) || km <= 0) {
    const errore = document.getElementById("errore");
    errore.innerHTML = 'HAI INSERITO UN VALORE IN KM NON VALIDO,RIPROVA PER FAVORE';

}
else if (isNaN(eta) || eta <= 0) {
    const errore = document.getElementById("errore");
    errore.innerHTML = 'HAI INSERITO UN VALORE IN ANNI NON VALIDO,RIPROVA PER FAVORE';
}
else if (eta < 18) {
    prezzoScontato = prezzoIntero * (1 - 0.2)
    prezzoScontato = prezzoScontato.toFixed(2);
    // console.log(prezzoScontato)
    const prezzo = document.getElementById("prezzo");
    prezzo.innerHTML = prezzoScontato;
    if (eta === 1) {
        const annoUno = document.getElementById('anno__uno');
        annoUno.innerHTML = 'o'

    }

} else if (eta >= 65) {
    prezzoScontato = prezzoIntero * (1 - 0.4)
    prezzoScontato = prezzoScontato.toFixed(2);
    // console.log(prezzoScontato)
    const prezzo = document.getElementById("prezzo");
    prezzo.innerHTML = prezzoScontato;
} else {
    const prezzo = document.getElementById("prezzo");
    prezzo.innerHTML = prezzoIntero;
}

// controllo variabili
console.log(km, eta, prezzoIntero)

