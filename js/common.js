const barTop = $('.bar').offset().top;

// .bar descend en meme temps que la page descend
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.bar').css('top', barTop + scroll + 'px');
});
