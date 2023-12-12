function Copyf() {
    var copyText = document.getElementById("password");
    var message = document.getElementById("copied");
    // console.log(copyText.value);
    navigator.clipboard.writeText(copyText.value);
    message.style.visibility = "visible";
    setTimeout(function(){
        message.style.visibility = "hidden";
    }, 1000);
    // document.write("Copied the text: " + copyText.value);
}
function generate(){
    var show = document.getElementById("output");
    // console.log(show);
    var length = document.getElementById("length").value;
    var low = document.getElementById("lowercase").checked;
    var up = document.getElementById("uppercase").checked;
    var nu = document.getElementById("numbers").checked;
    var spe = document.getElementById("symbols").checked;
    var lower = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var number = "0123456789"
    var special = "!@#$%^&*()_+~`|}{[]:;?><,./-="
    var characters = "";
    if(low){
        characters += lower;
    }
    if(up){
        characters += upper;
    }
    if(nu){
        characters += number;
    }
    if(spe){
        characters += special;
    }
    var password = "";
    for(var i = 0; i < length ; ++i){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    show.style.visibility = "visible";
    document.getElementById("password").value = password;
}
