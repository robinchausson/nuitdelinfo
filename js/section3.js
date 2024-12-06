$(document).ready(function() {
    function animatePoisson1() {
        $('.poisson1')
            .css({left: '-30%', opacity: '0', transform: 'scale(0.6)translate(30%,60%)rotate(0deg)'}) // Réinitialise la position et l'opacité
            .fadeTo(200, 1).animate({left: '0'}, 4000) // Déplace vers la droite
            .fadeTo(1000, 0, function() { // Réduit progressivement l'opacité
                setTimeout(animatePoisson1, 4000); // Relance l'animation après 3 secondes
            })
            .each(function() { // Applique les vibrations en parallèle
                let vibration = setInterval(() => {
                    $(this).css('transform', 'scale(0.6)translate(30%,60%)rotate(' + (Math.random() * 4 - 2) + 'deg)');
                }, 100);

                // Arrête les vibrations après la durée totale de l'animation
                setTimeout(() => clearInterval(vibration), 4000);
            });
    }

    animatePoisson1(); // Lancer l'animation en boucle

    function animatePoisson2() {
        $('.poisson2')
            .css({left: '130%', opacity: '0', transform: 'translate(-130%,-50%)scale(0.4)rotate(0deg)'}) // Réinitialise la position et l'opacité
            .fadeTo(200, 1).animate({left: '115%'}, 4000) // Déplace vers la gauche
            .fadeTo(1000, 0, function() { // Réduit progressivement l'opacité
                setTimeout(animatePoisson2, 4000); // Relance l'animation après 3 secondes
            })
            .each(function() { // Applique les vibrations en parallèle
                let vibration = setInterval(() => {
                    $(this).css('transform', 'translate(-130%,-50%)scale(0.4)rotate(' + (Math.random() * 4 - 2) + 'deg)');
                }, 100);
    
                // Arrête les vibrations après la durée totale de l'animation
                setTimeout(() => clearInterval(vibration), 4000);
            });
    }
    
    // Lancer animationPoisson2 après 4 secondes
    setTimeout(animatePoisson2, 4000);

    // Ajouter le gif /assets/img/flop.gif lorsque .plastique est clické
    $('.vitamine').click(function() {
        // detruire tous les flop
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
        if ($('.vitamine').length == 1) {
            $('html, body').animate({ scrollTop: $('#section4').offset().top }, 1400);
            $('#plongeur').css({'transition':'2s','transform' :'translate(-40%, 440%)rotate(10deg)'})
            setTimeout(() => {
                $('#section4 .message').css('opacity', 1);
            }, 400);
        }
    });

    
});
