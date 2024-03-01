<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: index.html");
}

/*
if( ! isset( $_POST['nombre'] ) ){
    header("Location: index.html" );
}
*/


$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

if (empty(trim($nombre))) $nombre = 'anonimo';
if (empty(trim($mail))) $mail = '';

$body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $nombre $telefono / $email</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;

//sintaxis de los emails email@algo.com || 
// nombre <email@algo.com>

$headers = "MIME-Version: 1.0 \r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: $nombre $telefono <$email> \r\n";
$headers .= "To: Sitio web <https://portefolio.arlidev.fr/> \r\n";
// $headers.= "Cc: copia@email.com \r\n";
// $headers.= "Bcc: copia-oculta@email.com \r\n";


//REMITENTE (NOMBRE/APELLIDO - EMAIL)
//ASUNTO 
//CUERPO 
$rta = mail('arturo@arlidev.fr', "Mensaje web: $asunto", $body, $headers);
//var_dump($rta);

//header("Location: gracias.html");
if ($mail) {
    echo "L'email a été envoyé.";
}