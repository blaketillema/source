function f(){

    ass = document.getElementsByClassName('assClass')[0];
    ass.style.display = "flex";
    let fart = new Audio('fart.mp3');
    fart.play();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    delay(1000).then(() => {
        ass.style.display = "none";
        popup = document.getElementById('popup');
        popup.style.display = "none";
        blurdiv = document.getElementById('blur');
        blurdiv.style.filter = "blur(0px)"
    });
}