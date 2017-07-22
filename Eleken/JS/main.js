$(document).ready(function(){
    $( function() {
        $( "#tabs" ).tabs();
    } ); //end tabs

    $ (function () {
        $("#tabs"+" li").click(function () {
            $("#tabs"+" li.active").removeClass("active");
            $(this).addClass("active");
        });//end class

        $(".load").click(function () {
            $(".hide").css("display","block");
            $(".load").css("display","none");

        });// end click load
    }); //end click

    $(function () {
        $("figure").draggable( {
            helper: "clone",
            revert: "invalid",
            containment: "html",


            start: function (event, ui) {
                ui.helper.css("transform", "scale(0.5)");
            } //end start
        }); //end draggable
    });//

    $(function () {
        $(".bag").droppable( {
            tolerance: "touch",

           drop: function (event, ui){
               ui.helper.hide("explode");
               var $input = $(this).parent().find("input");
               $input.val(parseInt($input.val())+ 1);
               $input.change();
               return false;
               //alert("Added to cart")

           }


        }); //end dropable
    });//

}); //end ready