
class Partido {
    constructor(circunscripcion, id, nombre, candidato = null) {
        this.circunscripcion = circunscripcion;
        this.id = id;
        this.nombre = nombre;
        this.candidato = candidato;
    }
}

function generarPartidos() {
    const circunscripcion = "Albacete";

    const nombresPartidos = [
        "Partido Popular",
        "Partido Socialista Obrero Español",
        "VOX",
        "SUMAR",
        "Podemos",
        "PACMA",
        "Ciudadanos",
        "Se Acabó La Fiesta"
    ];

    return nombresPartidos.map((nombre, index) => {
        return new Partido(
            circunscripcion,
            index + 1,
            nombre
        );
    });
}

module.exports = {
    Partido,
    generarPartidos
};

console.log(generarPartidos());