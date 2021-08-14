<?php

$destino= "anaisfv.dsn@gmail.com";
$nombre =  $_Post["nombre"];
$asunto =  $_Post["asunto"];
$correo =  $_Post["correo"];
$mensaje =  $_Post["mensaje"];
$contenido =  "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;
mail($destino, "Contacto", $contenido);
header("Location:gracias.html");


?>

