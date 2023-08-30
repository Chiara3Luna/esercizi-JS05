function ottieniNomiContatti(contatti) {
    return contatti.map((contatto) => contatto.name);
}

// Esempio di utilizzo
const input = [
    { name: 'Sidious', number: 33333333 },
    { name: 'Maul', number: 33344444 },
];

const output = ottieniNomiContatti(input);
console.log(output);
