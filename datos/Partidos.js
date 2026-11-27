/* Programa de Arturo */
 
// circunscripcion, ID, Nombre del partido, canidato (recibido por Tania)
class Partido {
    constructor(circunscripcion, id, nombre, candidato = null) {
        this.circunscripcion = circunscripcion;
        this.id = id;
        this.nombre = nombre;
        this.candidato = candidato;
    }
}

const partidos = [
    new Partido("Albacete", 1, "Partido Socialista Obrero Español"),
    new Partido("Albacete", 2, "Frente Obrero"),
    new Partido("Albacete", 3, "Se Acabó La Fiesta"),
    new Partido("Albacete", 4, "Por un Mundo Más Justo"),
    new Partido("Albacete", 5, "VOX"),
    new Partido("Albacete", 6, "Podemos"),
    new Partido("Albacete", 7, "Partido Animalista con el Medio Ambiente"),
    new Partido("Albacete", 8, "Partido Popular"),
    new Partido("Albacete", 9, "Frente Amplio")
];

console.log(partidos);