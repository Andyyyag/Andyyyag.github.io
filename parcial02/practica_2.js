document.getElementById("boton").addEventListener("click", function(){
    let rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(rand);

    if(rand==1){
        document.getElementById("imag").src="imagenes/1.png"
    }
    if(rand==2){
        document.getElementById("imag").src="imagenes/2.jpeg"
    }
    if(rand==3){
        document.getElementById("imag").src="imagenes/3.webp"
    }
    if(rand==4){
        document.getElementById("imag").src="imagenes/4.png"
    }
    if(rand==5){
        document.getElementById("imag").src="imagenes/5.webp"
    }
    if(rand==6){
        document.getElementById("imag").src="imagenes/6.png"
    }
});