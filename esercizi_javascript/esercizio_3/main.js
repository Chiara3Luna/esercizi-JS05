class Giocatore {
    constructor(nome) {
        this.nome = nome;
        this.punteggio = [];
    }
    
    tira(punteggio) {
        this.punteggio.push(punteggio);
    }
    
    calcolaPunteggioTotale() {
        let totale = 0;
        for (let i = 0; i < this.punteggio.length; i++) {
            totale += this.punteggio[i];
        }
        return totale;
    }
}

class PartitaBowling {
    constructor() {
        this.giocatori = [];
    }
    
    aggiungiGiocatore(nome) {
        const nuovoGiocatore = new Giocatore(nome);
        this.giocatori.push(nuovoGiocatore);
    }
    
    tira(punteggio, indiceGiocatore) {
        if (indiceGiocatore < this.giocatori.length) {
            this.giocatori[indiceGiocatore].tira(punteggio);
        }
    }
    
    calcolaPunteggiTotali() {
        const punteggiTotali = [];
        for (let i = 0; i < this.giocatori.length; i++) {
            const giocatore = this.giocatori[i];
            const punteggioTotale = giocatore.calcolaPunteggioTotale();
            punteggiTotali.push({ nome: giocatore.nome, punteggio: punteggioTotale });
        }
        return punteggiTotali;
    }
    
    determinaVincitore() {
        const punteggiTotali = this.calcolaPunteggiTotali();
        punteggiTotali.sort((a, b) => b.punteggio - a.punteggio);
        return punteggiTotali[0]; // Il primo elemento è il vincitore con il punteggio più alto
    }
}

// Esempio di utilizzo
const partita = new PartitaBowling();

partita.aggiungiGiocatore("Giocatore 1");
partita.aggiungiGiocatore("Giocatore 2");

partita.tira(5, 0); // Il giocatore 1 tira 5
partita.tira(3, 0); // Il giocatore 1 tira 3
partita.tira(8, 1); // Il giocatore 2 tira 8
partita.tira(2, 1); // Il giocatore 2 tira 2

const punteggiTotali = partita.calcolaPunteggiTotali();
console.log(punteggiTotali);

const vincitore = partita.determinaVincitore();
console.log(`Il vincitore è ${vincitore.nome} con un punteggio di ${vincitore.punteggio}`);
