$(document).ready(function(){
    $(".submit").click(function(){
        let email = $(".email").val();
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!email.match(regex)){
            $(".email").addClass("invalid");
            $(".invalid-message").css("display", "block");
        }
    });
});