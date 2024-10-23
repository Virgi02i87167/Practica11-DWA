let estudiantes = [
    {nombre: "Jonathan", mota:4},
    {nombre: "Virgilio", nota: 10},
    {nombre: "Iveth", nota: 8}
];

let estudiantesModificados = estudiantes.map(estudiante =>
    estudiante.nombre === "Virgilio"
    ? {...estudiante, nota: 6}
    : {...estudiante}
);

console.log(estudiantesModificados);
console.log(estudiantes);