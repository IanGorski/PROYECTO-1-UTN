let dias_semana = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
];
let dias_que_hay_clases = ["lunes", "miércoles"];

let diaIngresado;

while (true) {
    dia_ingresado = prompt("Ingresá un día:");

    if (!dias_semana.includes(dia_ingresado)) {
        alert("Día inválido. Por favor ingresá un día de la semana válido.");
        continue;
    }

    if (dias_que_hay_clases.includes(dia_ingresado)) {
        alert("ERROR día repetido");
        continue;
    }

    dias_que_hay_clases.push(dia_ingresado);
    console.log(`Día agregado correctamente: ${dia_ingresado}`);
    break;
}

console.log("Días que hay clases:", dias_que_hay_clases);
