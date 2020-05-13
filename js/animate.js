$(".call-to-action").click(function() {
    $('html,body').animate({
        scrollTop: $("#section_work").offset().top
    }, 1200);
});

ScrollReveal().reveal('.work', { reset: true, delay: 500 });

// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });