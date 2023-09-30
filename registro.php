<?php
//DATOS DE CONEXION
$databaseHost = 'localhost';
$databaseName = 'usuarios';
$databaseUsername = 'root';
$databasePassword = 'alonso';

//ESTABLECER NUEVA CONEXION
$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName);

//IMPRIMIR ERROR SI OCURRE ALGO
if ($mysqli->connect_errno) {
	echo "Falló la conexión a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//GUARDAR LOS DATOS DE LOS FORMS CON POST EN VARIABLES
$identificador = mysqli_real_escape_string($mysqli, $_POST['identificador']);
$contraseña = mysqli_real_escape_string($mysqli, $_POST['contraseña']);

//HACER UNA QUERY DE INSERCIÓN CON ESTOS DATOS E IMPRIMIR QUE SE HIZO CORRECTAMENTE
$result = mysqli_query($mysqli, "INSERT INTO usuarios_registrados (`identificador`, `contraseña`) VALUES ('$identificador', '$contraseña' )");

echo " <h1 style=\"color: green; font-size: 40px\">Has sido registrado correctamente";


//NOTA: CODIGO USADO PARA CREAR BASE DE DATOS
// create database usuarios;
// use usuarios;
// CREATE TABLE `usuarios_registrados` (
//   `identificador` varchar(13) NOT NULL,
//   `contraseña` varchar(8) NOT NULL,
//   PRIMARY KEY  (`identificador`)
// );


?>