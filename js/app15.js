const contraseñaPredefinida = "Contraseña123";

let contraseñaUsuario = prompt("Ingrese su contraseña:");


if (contraseñaUsuario === contraseñaPredefinida) {
    console.log("¡Acceso concedido! La contraseña es correcta");
} else {
    console.log("Acceso denegado. La contraseña es incorrecta");
}