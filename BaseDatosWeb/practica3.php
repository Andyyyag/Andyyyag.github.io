<?php

$jugador1 = $_POST["jugador1"];
$jugador2 = $_POST["jugador2"];

$gato = $_POST["gato"];
//Array 
//$gato[0]=X, $gato[1]=O, $gato[2]=X
//$gato[3]=X, $gato[4]=O, $gato[5]=O
//$gato[6]=X, $gato[7]=X, $gato[8]=O

//Validar ¿Quién es el ganador?

if($gato[0] == "X" && $gato[1] == "X" && $gato[2] == "X"){
    echo "<h1>Ganador ".$jugador." X </h1>";
    return;
}

//Validar todos los casos de las líneas

?>