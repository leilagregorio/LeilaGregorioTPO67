<?php
include_once(db.php);

//recibo los datos del formulario
$nombre=$_GET['nombre'];
$email=$_GET['email'];
$telefono=$_GET['telefono'];
$mensaje=$_GET['mensaje'];

echo "Los datos ingresados";
echo"$nombre,$email,$telefono y $mensaje";

$conectar=conn();
$sql="INSERT INTO usuario(nombre, email, telefono, mensaje)VALUES('$nombre', '$email','$telefono', '$mensaje')";
$resul=mysqli_query($conectar,$sql)or trigger_error("query failed".mysqli_error($conectar),E_USER_ERROR);
echo "$sql";
?>
