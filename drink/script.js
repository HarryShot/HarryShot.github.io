window.addEventListener("load",init,false);

    function init() {
        Module.check();
        addItemToTable(document.getElementById("table1"),Module.drinks);
        addItemToTable(document.getElementById("table2"),Module.additions);

        document.getElementById("calculate").addEventListener("click",function () {
            var drinkVal = document.getElementById("drinkId");
            var additionVal = document.getElementById("AdditionId");
            var arrayOfAddition = additionVal.value.split(",");

            if((drinkVal.value.length==0)||(!isFinite(drinkVal.value))||!Module.checkCorrectChoiseDrink(drinkVal.value-1)){
                drinkVal.value = "";
                alert("An error in the choice of drink");
            }else{
                if(!Module.checkCorrectChoiseAddition(arrayOfAddition)&&!(additionVal.value=="")){
                    additionVal.value = "";
                    alert("An error in the choice of addition");
                }else{
                    document.getElementById("sum").innerHTML = Module.paymentCount(parseInt(drinkVal.value),arrayOfAddition)+"$";
                }
            }
        },false);

        document.getElementById("drinkId").addEventListener("focus",clearSum,false);
        document.getElementById("AdditionId").addEventListener("focus",clearSum,false);

        function clearSum() {
            document.getElementById("sum").innerHTML = "";
        };


        function addItemToTable(elem,massive,number) {
            var temp = 0;
            if(number){temp=number}else{temp=0};
            for(var i=0, length = massive.length;i<length;i++){
                elem.innerHTML += "<tr><td>"+(i+1+temp)+"</td><td>"+massive[i].name+"</td><td>"+massive[i].cost+"$</td></tr>";
            }
        }


        function showModal(modal) {
            modal.style.display = "block";
        }
        function closeModal(modal) {
            modal.style.display = "none";
        }

        var drinkModal = document.getElementById("add_drink");
        var additionModal = document.getElementById("add_addition");
        document.getElementById("addNewDrink").addEventListener("click",function(){showModal(drinkModal)},false);
        var closeButt = document.getElementsByClassName("close_modal");
        var closeSpan = document.getElementsByClassName("close");

        closeButt[0].addEventListener("click",function(){closeModal(drinkModal)},false);
        closeSpan[0].addEventListener("click",function(){closeModal(drinkModal)},false);

        document.getElementById("addNewAdd").addEventListener("click",function(){showModal(additionModal)},false);

        closeButt[1].addEventListener("click",function(){closeModal(additionModal)},false);
        closeSpan[1].addEventListener("click",function(){closeModal(additionModal)},false);


        var addButtons = document.getElementsByClassName("add_new_item");
        addButtons[0].addEventListener("click",function () {
            var newDrinkName = document.getElementById("new_drink_name");
            var newDrinkCost = document.getElementById("new_drink_cost");
            if (newDrinkName.value==""){
                newDrinkName.value="";
                alert("Error in name of new drink");
            }else{
                if(newDrinkCost.value==""||!isFinite(newDrinkCost.value)){
                    newDrinkCost.value = "";
                    alert("Error in cost of new drink");
                }else{
                    Module.addNewDrink(newDrinkName.value,newDrinkCost.value);
                    var temp = [{name:newDrinkName.value, cost:newDrinkCost.value}];
                    addItemToTable(document.getElementById("table1"),temp,Module.drinks.length-1);
                    closeModal(drinkModal);
                }
            }
        },false);

        addButtons[1].addEventListener("click",function () {
            var newAdditionName = document.getElementById("new_addition_name");
            var newAdditionCost = document.getElementById("new_addition_cost");
            if (newAdditionName.value==""){
                newAdditionName.value="";
                alert("Error in name of new addition");
            }else{
                if(newAdditionCost.value==""||!isFinite(newAdditionCost.value)){
                    newAdditionCost.value = "";
                    alert("Error in cost of new addition");
                }else{
                    Module.addNewAddition(newAdditionName.value,newAdditionCost.value);
                    var temp = [{name:newAdditionName.value, cost:newAdditionCost.value}];
                    addItemToTable(document.getElementById("table2"),temp,Module.additions.length-1);
                    closeModal(additionModal);
                }
            }
        },false);
    }