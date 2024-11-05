$(document).ready( function(){
     $("#boton").click(function(){
        var nombr = $("#texto").val();
        alert(nombr);
    });

    $("#desaparecer").click(function(){
        $("#desaparecer").css("display", "inherit").fadeOut(200);
    });
});
