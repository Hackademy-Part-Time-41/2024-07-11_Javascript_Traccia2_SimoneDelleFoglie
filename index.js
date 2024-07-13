function gameDadi() {
    let launchesNumbers=parseInt(prompt('Indicare il numero di lanci da effetuare per ciascun giocatore:'));
    let i=0;
    let result1=0;
    while (i<=launchesNumbers) {
        let dadoNumber1= Math.floor(Math.random() * (6 - 1) + 1);
        result1 += dadoNumber1;
        i++;  
    }
    console.log('il numero totalizzato dal giocatore 1 è '+ result1);
    let z=0;
    let result2= 0;
    while (z<= launchesNumbers) {
        let dadoNumber2= Math.floor(Math.random() * (6 - 1) + 1);
        result2 += dadoNumber2;
        z++;
    }
    console.log('Il numero totalizzato dal giocatore 2 è '+ result2);
    if (result1>=result2) {
        if (result1==result2) {
            console.log('I due giocatori hanno totalizzato lo stesso punteggio');
        } else {
            console.log('Il giocatore 1 ha vinto');
        }
    } else {
        console.log('Il giocatore 2 ha vinto');
    }
}


console.log('Inizio')
gameDadi();
console.log('Fine');

