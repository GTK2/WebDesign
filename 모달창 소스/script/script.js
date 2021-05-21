$(document).ready(function(){
    $("#contents div").click(function(){
        $("#modal").show();
    });
    $(".popup input").click(function(){
        $("#modal").hide();
    });
});