console.log ("Costo del biglietto del treno:")

const km_viaggio = parseInt(prompt("Inserire i Km che si devono percorrere:"))
console.log(`I km da percorrere sono: ${km_viaggio}`)

const eta = parseInt(prompt ("Inserite la vostra età: "))
console.log(`L'età del passegero è: ${eta}`)

const prezzo_al_km = 0.21

if (eta < 18) {
  const prezzo_scontato20 = (km_viaggio * prezzo_al_km) *20/100
  let prezzo_finale = (km_viaggio * prezzo_al_km) - prezzo_scontato20
  console.log (`Il prezzo totale con lo sconto del 20% è: ${prezzo_finale.toFixed(2)}€`)

} else if (eta >= 65) {
  const prezzo_scontato40 = (km_viaggio * prezzo_al_km) *40 /100
  let prezzo_finale = (km_viaggio * prezzo_al_km) - prezzo_scontato40
  console.log (`Il prezzo totale con lo sconto del 40% è: ${prezzo_finale.toFixed(2)}€`)
}

else {
  let prezzo_pieno = km_viaggio * prezzo_al_km
  console.log (`Il prezzo totale è: ${prezzo_pieno.toFixed(2)}€`)
}



