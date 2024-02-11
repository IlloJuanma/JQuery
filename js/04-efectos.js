$(document).ready(function () {
    var caja = $('#caja');

    $('#mostrar').hide();

    $('#mostrar').click(function () {
        $(this).hide();
        $('#ocultar').show('fast');
        caja.fadeIn('slow');
    });
    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show('normal');
        caja.fadeOut('slow');
    });

    // Animaciones
    $('#animame').click(function () {
        //animacion 1 paso
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '100px',
        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '100px',
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px',
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px',
            }, 'slow');
    });
});
