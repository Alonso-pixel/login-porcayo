<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de Datos</title>
</head>
<body>
    <h1>Has sido logeado correctamente</h1>
</body>
</html> -->

<?php
$identificador = $_GET['identificador'];
$contrasena = $_GET['contraseña'];
// echo "ID " . $identificador;
if(preg_match("/^[A-Z]{4}\d{6}2\d{2}$/",$identificador)){
    echo "<h1 style=\"background-color : green;\">El identificador es correcto </h1><br>";
}
else {
    echo "<h1 style=\"background-color : red; color: yellow;\"> El id es incorrecto </h1>";
}

if(preg_match("/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8}$/",$contrasena)){
    echo "<h1 style=\"background-color : green;\">La contraseña es correcta</h1> <br>";
}
else {
    echo "<h1 style=\"background-color : red; color: yellow;\"> La contraseña es es incorrecta </h1>";
}
// echo "<br>";
// echo "Contrasena " . $contrasena;







// ... más código

// echo "Última sentencia";



?>
