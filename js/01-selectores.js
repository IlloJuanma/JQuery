$(document).ready(function () {
    console.log("Sesión 1 de JQuery");

    //Selector accesible vía ID
    var rojo= $('#rojo').css("background-color", "red")
                        .css("color","white");
    var amarillo= $('#amarillo').css("background-color", "yellow")
                        .css("color","black");
    var verde= $('#verde').css("background-color", "green")
                        .css("color","white");

    //Selector de clase
    var mi_clase = $('.zebra');
    mi_clase.css("border", "3px dashed black");
    console.log(mi_clase);
    console.log(mi_clase[0]);

    //Selector de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var este= $(this); // Devuelve el que ha sido clickado
        
        if (este.hasClass("zebra")) {
            este.removeClass("zebra");
            este.addClass("zebra2");              
        }else{
            este.removeClass("zebra2");
            este.addClass("zebra");  
            
        }
    });

    //Selector de atributo
    $('[title = "Google"]').css("background-color","blue")
                          .css("color", "white");

    //Otros aspectos interesantes --> multiselectores
    $('p, a').addClass("margenSuperior");

    var busqueda = $('#caja').find('.resaltado');
    busqueda.css("font-size", "24px");
    console.log(busqueda);

});
