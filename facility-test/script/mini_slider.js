$(function () {


    var width = $(".mini_slider_img").css("width");
    var animationSpeed = 1000;
    var pause = 4000;
    var currentSlide = 1;


    var slider = $(".mini_slider_img");
    var slideContainer = slider.find(".slides");
    var slides = slideContainer.find(".slide");


    var timer = setInterval(change, pause);

    function change() {
       slideContainer.animate({'margin-left':'-='+width},animationSpeed,function () {
           currentSlide++;
           if(currentSlide>9){
               currentSlide =1;
               slideContainer.css('margin-left',0);
           }
       });
    }
    $(".mini_button_right").click(function () {
        clearInterval(timer);
        change();
        timer = setInterval(change,pause);
        $(".mini_button_right").attr("disabled","disabled");
        setTimeout(function () {
            $(".mini_button_right").removeAttr("disabled");
        },animationSpeed+100);
    });
    $(".mini_button_left").click(function () {
        clearInterval(timer);
        slideContainer.animate({'margin-left':'+='+width},animationSpeed,function () {
            currentSlide--;
            if(currentSlide<1){
                currentSlide = 1;
                slideContainer.css('margin-left',-width);

            }
        });

       timer = setInterval(change,pause);
        $(".mini_button_left").attr("disabled","disabled");
        setTimeout(function () {
            $(".mini_button_left").removeAttr("disabled");
        },animationSpeed+100);
    });
});