
document.getElementById('age').innerHTML += `<option value="Centenario">Centenario</option>`

document.querySelector("button").addEventListener('click', function(){
    const etaDelPasseggero =  ('Quanti anni hai?');
    const textAsNumber = parseInt (etaDelPasseggero);
    console.log (textAsNumber);
    // second question
    const km = ('Quanti km devi percorrere?');
    const Number = parseInt (km);
    console.log (km);
    
    // price for ticket
    let ticket = km * 0.21;
    
    // condition
    if (textAsNumber < 18) {
        let ventiPercento  = (ticket / 100) *20;
        ticket = ticket - ventiPercento;
    }
    
    else if (textAsNumber > 65) {
        let quarantaPercento  = (ticket / 100) *40;
        ticket = ticket - quarantaPercento;
    }
    document.getElementById('biglietto').innerHTML = 'price for ticket' + " " + ticket 
})






