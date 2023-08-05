document.getElementById('myButton').onclick = function(){

    username = document.getElementById("myText").value;
    inputValue = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hey There " + username  + "!" 
    + " Check Out Our Cool Stuff Down Below!" ;

    if (inputValue.includes("Sayori")) {
        window.location.href = "/scrap/sayori.html";
      }
    if (inputValue.includes("Natsuki")) {
        window.location.href = "/scrap/natsuik.html";

    }
    if (inputValue.includes("Yuri")) {
        window.location.href = "/scrap/yuri.html";

    }
    if (inputValue.includes("Monika")) {
        window.location.href = "/scrap/monika.html";

    }
    if (inputValue.includes("Yupiel")) {
        window.location.href = "/scrap/yupiel.html";

    }
    if (inputValue.includes("Mirrored")) {
        document.getElementById("myLabel").innerHTML = "Oh hey Jamie!! "
    }
    if (inputValue.includes("x40arcade")) {
        document.getElementById("myLabel").innerHTML = "hi, nice to meet you!! "
    }
    if (inputValue.includes("Bakkuro")) {
        document.getElementsByTagName("h1")[0].innerHTML = "BAKKURO HAS AWOKEN"
    }
    if (inputValue.includes("Bakkuro")) {
        document.getElementById("myLabel").innerHTML = "dun... dun... dun..."
    }
    if (inputValue.includes("Jamie")) {
        document.getElementById("myLabel").innerHTML = "?"
    }


}