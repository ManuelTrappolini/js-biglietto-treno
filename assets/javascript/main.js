console.log('ciao');
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//1 Fase di preparazione
//Creo variabili per i chilometri e per eta' passeggero e prezzo intero
let kilometers
let age 
let price

//2 Fase di raccoglimento dati
// creo prompt per richiedere all'utente i chilometri e eta' del passeggero

kilometers = Number(prompt('Inserisci il numero di chilometri che vuoi percorrere'))
age = Number(prompt('inserisci qui la tua etá'))
price = 0.21  * kilometers
console.log(kilometers, age, price)
//3 fase di elaborazione dati
// creo condizioni in base agli sconti applicabili in base all'eta' del passeggero

// se minore di 18 applico sconto del 20% e faccio differenza con il prezzo totale  ossia variabile price
if (age < 18){
    discountUnder = price - ((price * 20) / 100) 
    console.log(discountUnder.toFixed( 2 ))
    alert (`il prezzo del biglietto é di € ${discountUnder.toFixed( 2 )}`)
}
//se maggiore di 65 applico sconto del 40% e faccio differenza con il prezzo totale ossia variabile price
else if (age > 65){
    discountOver = price - ((price * 40) / 100)
    console.log(discountOver.toFixed( 2 ));
    alert (`il prezzo del biglietto é di € ${discountOver.toFixed( 2 )}`)
}

// se eta compresa tra i 18 e 65 non applico alcuno sconto e si procede con il prezzo intero sul biglietto
else{
    console.log(price.toFixed( 2 ))
    alert (`il prezzo del biglietto é di € ${price.toFixed( 2 )}`)
}