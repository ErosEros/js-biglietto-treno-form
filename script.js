// fuori dagli eventi
document.getElementById('age').innerHTML += `<option value="Centenario">Centenario</option>`;

document.querySelector("button").addEventListener('click', function(){

    const nome = document.getElementById('username') // richiamo l input username
    console.log(nome.value);
    
    const age = document.getElementById('age').value;
   
    // condition
    let sconto = 0
    console.log(age)
    switch (age) {
        case "Minorenne" : {sconto = 20}; break
        case "Over65" : {sconto = 40}; break
        case "Centenario" : {sconto = 100}; break
    }
    console.log (sconto)
    
    let km = document.getElementById('kilometri').value
    console.log(km)
    

    const prezzoPieno = parseInt (km) *0.21 // senza parseInt con addizione avviene una concatenazione
    console.log(prezzoPieno)

    const scontoTot = (prezzoPieno / 100) *sconto 
    console.log(prezzoPieno - scontoTot)

    const totalPrice = (prezzoPieno - scontoTot)

     // simbolo euro
    document.getElementById('biglietto').innerHTML += ' ' + new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(totalPrice);


})









