window.addEventListener('load',init,false);

    function init() {
       document.getElementById("popup").addEventListener('click', modalwindow,false);
    };

    function modalwindow() {

    var body_element = document.getElementsByTagName("body")[0];

    var modalWindow = document.createElement("div");
        modalWindow.style.position = "fixed";
        modalWindow.id = "modal_window";
        modalWindow.style.zIndex = "1";
        modalWindow.style.left = "0";
        modalWindow.style.top = "0";
        modalWindow.style.width = "100%";
        modalWindow.style.height = "100%";
        modalWindow.style.overflow = "auto";
        modalWindow.style.backgroundColor = "rgba(0,0,0,0.8)";


    var modalContent = document.createElement("div");
        modalContent.style.backgroundColor = "#fefefe";
        modalContent.style.padding = "20px";
        modalContent.style.border = "1px solid #888";
        modalContent.style.margin = "15% auto";
        modalContent.style.position = "relative";
    if($(window).width()>480) {
        modalContent.style.width = "35%";
        modalContent.style.height = "30%";
    }else if($(window).width()<=480){
        modalContent.style.width = "80%";
        modalContent.style.height = "70%";
    }


    var modalText = document.createElement("p");
    modalText.innerHTML = "This is popup";
    modalText.style.fontFamily = "GothamProBold";
    modalText.style.fontSize = "14pt";
    modalText.style.color = "#646464";
    modalText.style.marginLeft = "calc(50% - 60px)";
    modalText.style.marginTop = "10%";

    var modalCloseBtn = document.createElement("button");
        if($(window).width()>480) {
            modalCloseBtn.innerHTML = "CLOSE";
        }else if($(window).width()<=480){
            modalCloseBtn.innerHTML = "SUBMIT";
        }
    modalCloseBtn.style.width = "160px";
    modalCloseBtn.style.height = "45px";
    modalCloseBtn.style.backgroundColor = "#646464";
    modalCloseBtn.style.color = "#ffffff";
    modalCloseBtn.style.borderRadius = "30px";
    modalCloseBtn.style.marginLeft = "calc(50% - 80px)";
    modalCloseBtn.style.marginTop = "5%";
    modalCloseBtn.addEventListener("click",closeFunc,false);



    var modalClose = document.createElement("span");
    modalClose.innerHTML = "&times;";
    modalClose.style.cursor = "pointer";
    modalClose.style.color = "#aaa";
        if($(window).width()>480) {
            modalClose.style.fontSize = "28px";
            modalClose.style.right= "2%";
        }else if($(window).width()<=480){
            modalClose.style.fontSize = "34px";
            modalClose.style.right= "4%";
        }

    modalClose.style.fontWeight = "bold";
    modalClose.style.position = "absolute";
    modalClose.style.top = "0";
    modalClose.addEventListener("click",closeFunc,false);

    modalContent.appendChild(modalClose);
    modalContent.appendChild(modalText);
    if($(window).width()<=480){
        var input_name = document.createElement("input");
        input_name.setAttribute("placeholder", "Your name");
        input_name.style.fontFamily = "GothamPro";
        input_name.style.textAlign = "center";
        input_name.style.fontSize = "16pt";
        input_name.style.marginTop = "10px";
        input_name.style.width = "90%";
        input_name.style.height = "48px";
        input_name.style.border = "1px solid black";
        input_name.style.borderRadius = "15px";
        input_name.style.marginLeft = "5%";

        modalContent.appendChild(input_name);

        var input_Email = document.createElement("input");
        input_Email.setAttribute("placeholder", "Your e-mail");
        input_Email.style.fontFamily = "GothamPro";
        input_Email.style.textAlign = "center";
        input_Email.style.fontSize = "16pt";
        input_Email.style.marginTop = "10px";
        input_Email.style.width = "90%";
        input_Email.style.height = "48px";
        input_Email.style.border = "1px solid black";
        input_Email.style.borderRadius = "15px";
        input_Email.style.marginLeft = "5%";

        modalContent.appendChild(input_Email);
    }
    modalContent.appendChild(modalCloseBtn);
    modalWindow.appendChild(modalContent);


    body_element.appendChild(modalWindow);

    function closeFunc() {
            body_element.removeChild(document.getElementById("modal_window"));
        }

    }
