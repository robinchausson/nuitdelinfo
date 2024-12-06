// do left and right animation to .nuage using jquery
$(document).ready(function() {
    function animateNuage(selector, distance, duration) {
        $(selector).animate({ left: `+=${distance}px` }, duration)
                   .animate({ left: `-=${distance}px` }, duration, function() {
                       animateNuage(selector, distance, duration);
                   });
    }

    animateNuage('.nuage1', 50, 1000);
    animateNuage('.nuage2', 70, 1500);
    animateNuage('.nuage3', 90, 2000);
    animateNuage('.bateau', 60, 3500);


    // créer des bulles avec cet element <div class="bulle"></div> de manière aléatoire qui monte jusqu'en haut de la page puis disparaisse
    function createBulle() {
        var bulle = $('<div class="bulle"></div>');
        var randomLeft = Math.floor(Math.random() * $(window).width());
        var randomSize = (Math.random() * 2 + 1) + 'rem'; // taille aléatoire entre 2rem et 5rem
        bulle.css({
            'left': randomLeft,
            'top': $('.vague').offset().top + 150,
            'width': randomSize,
            'height': randomSize
        });
        $('#section1').append(bulle);
        bulle.animate({ top: -150 }, { duration: 5000, easing: 'linear', complete: function() {
            bulle.remove();          
        }});
    }
    var bulleInter = setInterval(createBulle, 1000);


    $("#gotosection1").click(function() {
        $(this).fadeOut();
        $('html, body').animate({ scrollTop: $('#section2').offset().top }, 1400);

        $('#plongeur').css('transform', 'translate(-20%, -87%)rotate(80deg)');
        setTimeout(() => {
            $('#plongeur').css('transform', 'translate(35%, 15%)rotate(80deg)');
            setTimeout(() => {
                $('#plongeur').css('transform', 'translate(30%, 10%)rotate(170deg)');
                setTimeout(() => {
                    $('#plongeur').css('transform', 'translate(-20%, 110%)rotate(170deg)');
                    setTimeout(() => {
                        $('#plongeur').css('transform', 'translate(-20%, 110%)rotate(340deg)');
                        setTimeout(() => {
                            $("#section2 .message").css('opacity', 1);
                            
                            // On stop les bulles
                            clearInterval(bulleInter);
                        }, 500);
                    }, 500);
                }, 500);
                
            }, 500);
        }, 500);
        

    });

});