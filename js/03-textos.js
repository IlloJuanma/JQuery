$(document).ready(function () {
    // console.log("Sesión 3 de JQuery");

    $('a').each(function(){
        var este = $(this);
        var enlace = este.attr("href");

        este.attr("target", "blank");
        este.text(enlace); 

    });

    $('add_button')
            .removeAttr("disabled")
            .click(function () {
                $('#menu').html("<li><a href="'+$("#add_link").val()+'"></a></li>");
            });



});