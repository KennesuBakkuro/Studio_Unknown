document.getElementById('myButton').onclick = function(){

    username = document.getElementById("myText").value;
    inputValue = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hey There " + username  + "!" 
    + " Check Out Our Cool Stuff Down Below!" ;
    if (inputValue.includes("Sayori")) {
        window.location.href = "/scvv/s1.html";
      }
    if (inputValue.includes("Natsuki")) {
        window.location.href = "/scvv/s2.html";

    }
    if (inputValue.includes("Yuri")) {
        window.location.href = "/scvv/s3.html";

    }
    if (inputValue.includes("Monika")) {
        window.location.href = "/scvv/s4.html";

    }
    if (inputValue.includes("Yupiel")) {
        window.location.href = "/scvv/yupiel.html";

    }

};