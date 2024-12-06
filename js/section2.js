$(document).ready(function() {
    // anime les .virus en les faisant bouger de gauche à droite, de haut en bas de manière aléatoire
    function animateTremble(selector, distance, duration) {
        var randomLeft = Math.floor(Math.random() * distance);
        var randomTop = Math.floor(Math.random() * distance);
        $(selector).animate({ left: `+=${randomLeft}px`, top: `+=${randomTop}px` }, duration)
                   .animate({ left: `-=${randomLeft}px`, top: `-=${randomTop}px` }, duration, function() {
                       animateTremble(selector, distance, duration);
                   });
    }

    animateTremble('.virus1', 40, 1400);
    animateTremble('.virus2', 40, 1500);
    animateTremble('.virus3', 40, 1300);
    animateTremble('.virus4', 40, 1600);

    animateTremble('.plastique1', 30, 1000);
    animateTremble('.plastique2', 30, 1100);
    animateTremble('.plastique3', 30, 1200);

    // Ajouter le gif /assets/img/flop.gif lorsque .plastique est clické
    $('.plastique').click(function() {
        // detruire tous les flops
        
        
        var flop = $('<img src="assets/img/flop.gif" class="flop" alt="flop">');
        flop.css({
            'left': $(this).offset().left,
            'top': $(this).offset().top,
        });
        
        $('body').append(flop);
        $(this).css('opacity', 0);
        setTimeout(() => {
            $('.flop').remove();
            $(this).remove();
        }, 300);

        // S'il n'y a plus de plastique, on passe à la section 3
        if ($('.plastique').length == 1) {
            $('html, body').animate({ scrollTop: $('#section3').offset().top }, 1400);
            $('#plongeur').css({'transition':'2s','transform' :'translate(110%, 310%)rotate(10deg)scaleX(-1)'}) 
        }
    });
});
