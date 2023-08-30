class Persona {
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    
    presentati() {
        console.log(`Ciao! Il mio nome è ${this.nome} ${this.cognome} ed ho ${this.eta} anni.`);
    }
}

// Creazione di un'istanza della classe Persona
const persona1 = new Persona("Matteo", "Sisto", 36);
persona1.presentati();
