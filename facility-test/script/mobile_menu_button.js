(function ($) {
    $(function () {
        $('.icon').on('click',function () {
            $(this).closest('.main_menu').toggleClass('menu-open');
        });
        if($(window).width()<=480){
            $('.main_menu').on("click","a",function (e) {
                $(this).closest('.main_menu').toggleClass('menu-open');
            });
        }
    });
})(jQuery);