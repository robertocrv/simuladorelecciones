// Definición básica de la clase para que no me de error 
class organizacion {
    constructor(siglas, nombre) {
        this.siglas = siglas;
        this.nombre = nombre;
    }
}

// Listado de principales partidos y coaliciones en España (según datos de la JEC / Congreso)

// --- Más representados 
let PP = new organizacion("PP", "Partido Popular");
let PSOE = new organizacion("PSOE", "Partido Socialista Obrero Español");
let VOX = new organizacion("VOX", "Vox");
let SUMAR = new organizacion("SUMAR", "Movimiento Sumar");
let PODEMOS = new organizacion("PODEMOS", "Podemos");
let IU = new organizacion("IU", "Izquierda Unida");
let PACMA = new organizacion("PACMA", "Partido Animalista Con el Medio Ambiente");
let CS = new organizacion("CS", "Ciudadanos - Partido de la Ciudadanía");
let SALF = new organizacion("SALF", "Se Acabó La Fiesta");
let FO = new organizacion("FO", "Frente Obrero");
let RECORTES_CERO = new organizacion("RECORTES CERO", "Recortes Cero");
let PCTE = new organizacion("PCTE", "Partido Comunista de los Trabajadores de España");
let PUMJ = new organizacion("PUM+J", "Por Un Mundo Más Justo");
let FE_DE_LAS_JONS = new organizacion("FE de las JONS", "Falange Española de las JONS");
let ESCANOS_EN_BLANCO = new organizacion("ESCAÑOS EN BLANCO", "Escaños en Blanco para dejar escaños vacíos");

// --- Menos representados
let ERC = new organizacion("ERC", "Esquerra Republicana de Catalunya");
let JUNTS = new organizacion("JUNTS", "Junts per Catalunya");
let EH_BILDU = new organizacion("EH BILDU", "Euskal Herria Bildu");
let EAJ_PNV = new organizacion("EAJ-PNV", "Euzko Alderdi Jeltzalea - Partido Nacionalista Vasco");
let BNG = new organizacion("BNG", "Bloque Nacionalista Galego");
let CCa = new organizacion("CCa", "Coalición Canaria");
let UPN = new organizacion("UPN", "Unión del Pueblo Navarro");
let COMPROMIS = new organizacion("COMPROMÍS", "Coalició Compromís");
let MAS_MADRID = new organizacion("MÁS MADRID", "Más Madrid");
let COMUNS = new organizacion("COMUNS", "Catalunya en Comú");
let CUP = new organizacion("CUP", "Candidatura d'Unitat Popular");
let TERUEL_EXISTE = new organizacion("TERUEL EXISTE", "Teruel Existe");
let SORIA_YA = new organizacion("SORIA ¡YA!", "Soria ¡Ya!");
let PRC = new organizacion("PRC", "Partido Regionalista de Cantabria");
let NC_BC = new organizacion("NC-BC", "Nueva Canarias - Bloque Canarista");
let PAR = new organizacion("PAR", "Partido Aragonés");
let CHA = new organizacion("CHA", "Chunta Aragonesista");
let MES = new organizacion("MÉS", "Més per Mallorca");
let GBai = new organizacion("GBai", "Geroa Bai");
let UPL = new organizacion("UPL", "Unión del Pueblo Leonés");
let XAV = new organizacion("XAV", "Por Ávila");
let ADELANTE_ANDALUCIA = new organizacion("ADELANTE ANDALUCÍA", "Adelante Andalucía");
let ANDALUCIA_POR_SI = new organizacion("ANDALUCÍA POR SÍ", "Andalucía Por Sí");
let FORO = new organizacion("FORO", "Foro Asturias");
let EV = new organizacion("EV", "Existe - Coalición Existe");

// Array actualizado con los nuevos nombres de variable
const listaPartidos = [
    PP, PSOE, VOX, SUMAR, PODEMOS,
    IU, PACMA, CS, SALF, FO,
    RECORTES_CERO, PCTE, PUMJ, FE_DE_LAS_JONS, ESCANOS_EN_BLANCO,
    ERC, JUNTS, EH_BILDU, EAJ_PNV, BNG,
    CCa, UPN, COMPROMIS, MAS_MADRID, COMUNS,
    CUP, TERUEL_EXISTE, SORIA_YA, PRC, NC_BC,
    PAR, CHA, MES, GBai, UPL,
    XAV, ADELANTE_ANDALUCIA, ANDALUCIA_POR_SI, FORO, EV
];
// Objeto map con la clave sigla valor objeto organizacion
const mapaOrganizaciones = new Map();

listaPartidos.forEach(partido => {
    mapaOrganizaciones.set(partido.siglas, partido);
});