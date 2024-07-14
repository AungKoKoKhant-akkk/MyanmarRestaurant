

// const countUp = new CountUp('counter1', 989, { enableScrollSpy: true });


jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});



