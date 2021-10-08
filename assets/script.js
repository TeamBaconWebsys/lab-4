$(document).ready(function() {
   
    //getting ajax through getJSON function

    $.getJSON("text.json", function(result){
        $(result).find("socialMedia").each(function(){

            $("#footer").html(
                '<svg xmlns="' + element.xmlns + '" class="' + element.class + '">' + 
                '<path d="' + element.path + '"/> </svg>'
            )
        });
    });
});