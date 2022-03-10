let fart = new Audio('fart.mp3');

function f(){
    fart.play();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    ass = document.getElementsByClassName('assClass')[0];
    ass.style.display = "flex";

    delay(1000).then(() => ass.style.display = "none");
}