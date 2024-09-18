<?php

    $aciertos = 0;
    $pregunta1 = $_POST["pregunta1"];
    $pregunta2 = $_POST["pregunta2"];
    $pregunta3 = $_POST["pregunta3"];

    //valida pregunta 1 1. ¿Lenguaje de programación que se utiliza para WEB?
    echo "<h3> ¿Lenguaje de programación que se utiliza para WEB? </h3>";
    echo "<h5>Repuesta seleccionada ".$pregunta1." ---- Correcta = PHP</h5>";
    if($pregunta1 == "PHP"){
        $aciertos++;
        echo "<img src='correcta.jpg' width='50px'><hr>";
    } else {
        echo "<img src='incorrecta.png' width='50px'><hr>";
    }

    //Valido pregunta 2 s una plataforma informática de lenguaje de programación creada por Sun Microsystems en 1995.
    if(strtoupper($pregunta2) == "JAVA"){
        $aciertos++;
    }

    //Pregunta 3 - se deben validar 2 opciones sql y mongo
    $p3_respuestas_correctas = 0;

    if(count($pregunta3) == 2){
        for($i=0; $i<count($pregunta3); $i++){
            if($pregunta3[$i] == "sql" || $pregunta3[$i] == "mongo"){
                $p3_respuestas_correctas ++;
            }
        }
        if($p3_respuestas_correctas == 2){
            $aciertos++;
        }
    }
    
    echo "CALIFICACIÓN FINAl = " . ($aciertos * 10) . "%";

?>