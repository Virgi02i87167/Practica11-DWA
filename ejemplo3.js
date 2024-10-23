//funcion que recibe datos de un usuario y separa el resto de la informacion

function procesarUsuario(nombre,edad, ...OtrooDatos) {
    let usuarioFormateado = {
        nombre,
        edad,
        infoAdicional: {...OtrooDatos}
    };
    return usuarioFormateado;
}

let usuario = procesarUsuario("Virgilio", 23, "Ingenieria", "El salvador", "agosto 2024")

console.log(usuario);