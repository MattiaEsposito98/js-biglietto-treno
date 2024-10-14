console.log ("Costo del biglietto del treno:")

const km_viaggio = parseInt(prompt("Inserire i Km che si devono percorrere:"))
console.log(`I km da percorrere sono: ${km_viaggio}`)

const eta = parseInt(prompt ("Inserite la vostra età: "))
console.log(`L'età del passegero è: ${eta}`)

const prezzo_al_km = 21 /100;

if (eta < 18) {
  prezzo_scontato20 = (km_viaggio * prezzo_al_km) *20/100
  console.log (`Il prezzo totale con lo sconto del 20% è: ${prezzo_scontato20}€`)

} else if (eta >= 65) {
  prezzo_scontato40 = (km_viaggio * prezzo_al_km) *40 /100
  console.log (`Il prezzo totale con lo sconto del 40% è: ${prezzo_scontato40}€`)
}

else {
  let prezzo_pieno = km_viaggio * prezzo_al_km
  console.log (`Il prezzo totale è: ${prezzo_pieno}€`)
}



