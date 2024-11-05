function juego(){
    if(document.getElementById("1").value==document.getElementById("2").value && document.getElementById("1").value==document.getElementById("3").value && document.getElementById("1").value!="" && (document.getElementById("1").value=="x" || document.getElementById("1").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("4").value==document.getElementById("5").value && document.getElementById("4").value==document.getElementById("6").value  &&document.getElementById("4").value!="" && (document.getElementById("4").value=="x" || document.getElementById("4").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("7").value==document.getElementById("8").value && document.getElementById("7").value==document.getElementById("9").value && document.getElementById("7").value!="" && (document.getElementById("7").value=="x" || document.getElementById("7").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("1").value==document.getElementById("4").value && document.getElementById("1").value==document.getElementById("7").value && document.getElementById("1").value!="" && (document.getElementById("1").value=="x" || document.getElementById("1").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("2").value==document.getElementById("5").value && document.getElementById("2").value==document.getElementById("8").value && document.getElementById("2").value!="" && (document.getElementById("2").value=="x" || document.getElementById("2").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("3").value==document.getElementById("6").value && document.getElementById("3").value==document.getElementById("9").value && document.getElementById("3").value!="" && (document.getElementById("3").value=="x" || document.getElementById("3").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("1").value==document.getElementById("5").value && document.getElementById("1").value==document.getElementById("9").value && document.getElementById("1").value!="" && (document.getElementById("1").value=="x" || document.getElementById("1").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
    if(document.getElementById("3").value==document.getElementById("5").value && document.getElementById("3").value==document.getElementById("7").value && document.getElementById("3").value!="" && (document.getElementById("3").value=="x" || document.getElementById("3").value=="o")){
        document.getElementById("ganar").innerHTML="Ganador";
    }
}
