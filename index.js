document.getElementById('myButton').onclick = function(){

    username = document.getElementById("myText").value;
    inputValue = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hey There " + username  + "!" 
    + " Check Out Our Cool Stuff Down Below!" ;
    if (inputValue.includes("Sayori")) {
        window.location.href = "https://kennesubakkuro.github.io/Studio_Unknown/scvv/index4.html";
      }
    if (inputValue.includes("Natsuki")) {
        window.location.href = "https://kennesubakkuro.github.io/Studio_Unknown/scvv/index5.html";

    }
    if (inputValue.includes("Yuri")) {
        window.location.href = "https://kennesubakkuro.github.io/Studio_Unknown/scvv/index6.html";

    }
    if (inputValue.includes("Monika")) {
        window.location.href = "https://kennesubakkuro.github.io/Studio_Unknown/scvv/index7.html";

    }
    if (inputValue.includes("Yupiel")) {
        window.location.href = "https://kennesubakkuro.github.io/Studio_Unknown/scvv/index8.html";

    }

};