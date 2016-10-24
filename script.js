alert("Hey Teddy! :)");

var pictureShown = false;

$(document).ready(function(){
    $("#aristocat").click(function(){
        pictureShown = !pictureShown;
        $("#portrait").slideToggle();
    });
    
    $("#portrait").click(function(){
        if(pictureShown==true){
            $("#output").html("The picture is shown.");
        }else{
            $("#output").html("No picture visible.");
        }
    });
});