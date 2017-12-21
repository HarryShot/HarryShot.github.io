$(document).ready(function(){


    //dropdown menu
    $('#menu a').on('click', function(e){
        e.preventDefault();
    });

    $('#menu li').hover(function () {
        clearTimeout($.data(this,'timer'));
        if($(window).width()>768) {
            $('ul', this).stop(true, true).slideDown(200);
        }else if($(window).width()<=768){
            $('ul', this).stop(true, true).fadeIn(200);
        }
    }, function () {
        if($(window).width()>768) {
            $.data(this, 'timer', setTimeout($.proxy(function () {
                $('ul', this).stop(true, true).slideUp(500);
            }, this), 100));
        }else if($(window).width()<=768){
            $.data(this, 'timer', setTimeout($.proxy(function () {
                $('ul', this).stop(true, true).fadeOut(500);
            }, this), 100));
        }
    });

    function headerHide() {
        $(".menu_button_call").attr("style", "background-image: url(\"images/old-train.svg\")").fadeIn(1000);
        flag = !flag;
        $("header").fadeOut(300);
    }

    //click on body to hide menu not relized
    var flag = true;
    $(".menu_button_call").on('click',function () {
        $(".menu_button_call").fadeOut(500,function () {
            if(flag) {
                $(".menu_button_call").attr("style", "background-image: url(\"images/locomotive.svg\")").fadeIn(1000);
                flag = !flag;
                $("header").fadeIn(500);
            }else{
                headerHide();

            }
            }
        )
    });


    //slider
    if($(window).width()>=768){
        $(function () {

            //slider circle click - not relized
            //slider link option - not relized
            $('.slidre_control_container div div').eq(0).css("background-color","#959595");
            var img = new Array();
            img[0] = "images/438893.jpg";
            img[1] = "images/383525.jpg";
            img[2] = "images/427913.jpg";
            img[3] = "images/389714.jpg";
            img[4] = "images/340403.jpg";
            img[5] = "images/340350.jpg";
            img[6] = "images/340339.jpg";

            setInterval(ch,5000);
            var nb = 0;
            function ch(){
                nb++;
                change(nb);
                if(nb>=6)nb=-1;
            };

            function change(number){

                var image = img[number];
                /*сделать серклы!!!!!!*/
                $(".slider").fadeToggle(function () {
                    switch(image){
                        case "images/438893.jpg":{nb=0
                            $('.slidre_control_container div div').eq(0).css("background-color","#959595");
                            $('#slider_title').html("");
                            for (var i=0;i<=6;i++){
                                if(i==0)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                        case "images/383525.jpg":{nb=1
                            $('#slider_title').html("Урядова «гаряча лінія» для громадян, які виїжджають із східних регіонів та АР Крим");
                            $('#slider_link').attr("href", "#");
                            $('.slidre_control_container div div').eq(1).css("background-color","#959595");
                            for (var i=0;i<=6;i++){
                                if(i==1)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                        case "images/427913.jpg":{nb=2
                            $('#slider_title').html("Зупинимо корупцію разом");
                            $('#slider_link').attr("href", "#");
                            $('.slidre_control_container div div').eq(2).css("background-color","#959595");
                            for (var i=0;i<=6;i++){
                                if(i==2)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                        case "images/389714.jpg":{nb=3
                            $('#slider_title').html("Контакт-центр Укрзалізниці з питань вантажних перевезень, тел. (044) 465-22-22");
                            $('#slider_link').attr("href", "#");
                            $('.slidre_control_container div div').eq(3).css("background-color","#959595");
                            for (var i=0;i<=6;i++){
                                if(i==3)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                        case "images/340403.jpg":{nb=4
                            $('#slider_title').html("Розклад руху пасажирських поїздів");
                            $('#slider_link').attr("href", "#");
                            $('.slidre_control_container div div').eq(4).css("background-color","#959595");
                            for (var i=0;i<=6;i++){
                                if(i==4)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                        case "images/340350.jpg":{nb=5
                            $('#slider_title').html("Заощаджуйте з Інтерсіті+! квитки за 30 діб - дешевше. Діє бонусна програма");
                            $('#slider_link').attr("href", "#");
                            $('.slidre_control_container div div').eq(5).css("background-color","#959595");
                            for (var i=0;i<=6;i++){
                                if(i==5)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                        case "images/340339.jpg":{nb=-1
                            $('#slider_title').html("Розклад руху приміських поїздів");
                            $('#slider_link').attr("href", "#");
                            $('.slidre_control_container div div').eq(6).css("background-color","#959595");
                            for (var i=0;i<=6;i++){
                                if(i==6)continue
                                else{
                                    $('.slidre_control_container div div').eq(i).css("background-color","#ffffff");
                                }
                            }
                        } break;
                    };
                    $("#slider_image").attr("src", img[number]);
                    $(".slider").fadeToggle();
                });

            };
        });
    };

});