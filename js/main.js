function smoothScroll (duration) {
    $('a[href^="#"]').click(function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }

    });
}

function workBelt() {

    $('.thumb-unit').click(function(x) {
      x.preventDefault();
      $('.work-belt').css('left', '-100%');
      $('.work-container').show();
    });

    $('.work-return').click(function(x){
      x.preventDefault();
      $('.work-belt').css('left', '0%');
      $('.work-container').hide(500);
    });
}

$(function() {
      smoothScroll(300);
      workBelt();

 });﻿
