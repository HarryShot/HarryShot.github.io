$(function () {

    var img = new Array();
    img[0] = "image/slider1.jpg";
    img[1] = "image/slider2.jpg";
    img[2] = "image/slider3.jpg";


    var timer = setInterval(ch,5000);

    var nb = 0;
    function ch(){
        nb++;
        change(nb);
        if(nb>=1)nb=-1;
    };
    $(".full_slider_button_right").click(function () {
        clearInterval(timer);
        ch();
        timer = setInterval(ch,5000);
    });
    $(".full_slider_button_left").click(function () {
        nb -=2;
        if(nb==-2)nb=1;
        if(nb==-3)nb=0;
        clearInterval(timer);
        ch();
        timer = setInterval(ch,5000);
    });

    function change(number){
        var image = img[number];
        $(".full_slider").fadeToggle(function () {
            switch(image){
                case "image/slider1.jpg":{nb=0
                    $('.slider_choose_point div').eq(0).css("background-color","#646464");
                    for (var i=0;i<=2;i++){
                        if(i==0)continue
                        else{
                            $('.slider_choose_point div').eq(i).css("background-color","#ffffff");
                        }
                    }
                } break;
                case "image/slider2.jpg":{nb=1
                    $('.slider_choose_point div').eq(1).css("background-color","#646464");
                    for (var i=0;i<=2;i++){
                        if(i==1)continue
                        else{
                            $('.slider_choose_point div').eq(i).css("background-color","#ffffff");
                        }
                    }
                } break;
                case "image/slider3.jpg":{nb=-1
                    $('.slider_choose_point div').eq(2).css("background-color","#646464");
                    for (var i=0;i<=2;i++){
                        if(i==2)continue
                        else{
                            $('.slider_choose_point div').eq(i).css("background-color","#ffffff");
                        }
                    }
                } break;
            };
            $(".full_slider").css("background-image","url("+img[number]+")");
            $(".full_slider").fadeToggle();
        });

    };
});