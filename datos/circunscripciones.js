class Circunscripcion {
  constructor(nombre, censo, personasAElegir, mesas = []) {
    if (!Array.isArray(mesas)) {
      throw new TypeError("El parámetro 'mesas' debe ser un array de instancias de Mesa.");
    }
    this.nombre = nombre;
    this.censo = censo;
    this.personasAElegir = personasAElegir;
    this.mesas = mesas;
  }
}

const datosCircunscripciones = [
  { nombre: "A Coruña", censo: 0, escanos: 8 },
  { nombre: "Álava", censo: 0, escanos: 4 },
  { nombre: "Albacete", censo: 0, escanos: 4 },
  { nombre: "Alicante", censo: 0, escanos: 12 },
  { nombre: "Almería", censo: 0, escanos: 6 },
  { nombre: "Asturias", censo: 0, escanos: 7 },
  { nombre: "Ávila", censo: 0, escanos: 3 },
  { nombre: "Badajoz", censo: 0, escanos: 5 },
  { nombre: "Barcelona", censo: 0, escanos: 32 },
  { nombre: "Bizkaia", censo: 0, escanos: 8 },
  { nombre: "Burgos", censo: 0, escanos: 4 },
  { nombre: "Cáceres", censo: 0, escanos: 4 },
  { nombre: "Cádiz", censo: 0, escanos: 9 },
  { nombre: "Cantabria", censo: 0, escanos: 5 },
  { nombre: "Castellón", censo: 0, escanos: 5 },
  { nombre: "Ceuta", censo: 0, escanos: 1 },
  { nombre: "Ciudad Real", censo: 0, escanos: 5 },
  { nombre: "Córdoba", censo: 0, escanos: 6 },
  { nombre: "Cuenca", censo: 0, escanos: 3 },
  { nombre: "Gipuzkoa", censo: 0, escanos: 6 },
  { nombre: "Girona", censo: 0, escanos: 6 },
  { nombre: "Granada", censo: 0, escanos: 7 },
  { nombre: "Guadalajara", censo: 0, escanos: 3 },
  { nombre: "Huelva", censo: 0, escanos: 5 },
  { nombre: "Huesca", censo: 0, escanos: 3 },
  { nombre: "Illes Balears", censo: 0, escanos: 8 },
  { nombre: "Jaén", censo: 0, escanos: 5 },
  { nombre: "La Rioja", censo: 0, escanos: 4 },
  { nombre: "Las Palmas", censo: 0, escanos: 8 },
  { nombre: "León", censo: 0, escanos: 4 },
  { nombre: "Lleida", censo: 0, escanos: 4 },
  { nombre: "Lugo", censo: 0, escanos: 4 },
  { nombre: "Madrid", censo: 0, escanos: 37 },
  { nombre: "Málaga", censo: 0, escanos: 11 },
  { nombre: "Melilla", censo: 0, escanos: 1 },
  { nombre: "Murcia", censo: 0, escanos: 10 },
  { nombre: "Navarra", censo: 0, escanos: 5 },
  { nombre: "Ourense", censo: 0, escanos: 4 },
  { nombre: "Palencia", censo: 0, escanos: 3 },
  { nombre: "Pontevedra", censo: 0, escanos: 7 },
  { nombre: "Salamanca", censo: 0, escanos: 4 },
  { nombre: "Santa Cruz de Tenerife", censo: 0, escanos: 7 },
  { nombre: "Segovia", censo: 0, escanos: 3 },
  { nombre: "Sevilla", censo: 0, escanos: 12 },
  { nombre: "Soria", censo: 0, escanos: 2 },
  { nombre: "Tarragona", censo: 0, escanos: 6 },
  { nombre: "Teruel", censo: 0, escanos: 3 },
  { nombre: "Toledo", censo: 0, escanos: 6 },
  { nombre: "Valencia", censo: 0, escanos: 16 },
  { nombre: "Valladolid", censo: 0, escanos: 5 },
  { nombre: "Zamora", censo: 0, escanos: 3 },
  { nombre: "Zaragoza", censo: 0, escanos: 7 }
];

// Instanciación limpia de las 52 circunscripciones
const circunscripciones = datosCircunscripciones.map(
  (c) => new Circunscripcion(c.nombre, c.censo, c.escanos, [])
);