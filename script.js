function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min) + min);
}


let numeriGenerati = [];

while(numeriGenerati.length < 5){
    let numeri = getRandomInt(1,100);
    if(!numeriGenerati.includes(numeri)){ //serve a far si che non ci siano due numeri uguali dentro l'arey numeriGenerati
        numeriGenerati.push(numeri);   //il '!' seve a invertire il valore booleano grazzi a lui la funzione e vera se il nimero non e presente nel arey altrimenti funzionava al contrario
    }
    
}

const numeriGeneratiStamp = document.getElementById('numeriGenerati');
numeriGeneratiStamp.innerHTML = numeriGenerati.join(' - ')

function confrontaNumeri(numeriUtente){
    
}

setTimeout(()=>{numeriGeneratiStamp.innerHTML = '';},2900)
const timer = setTimeout(()=>{
    const numeriUtente = [];
    while(numeriUtente.length < 5){
        const numeri = parseInt(prompt('inserisci i numeri uno per volta')); //parseInt converte le stringe in valori numerici
        if(!numeriUtente.includes(numeri)){
            numeriUtente.push(numeri)
        }
        confrontaNumeri(numeriUtente);
    }
},3000);
