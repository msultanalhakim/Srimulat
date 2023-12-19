document.addEventListener("DOMContentLoaded", function(){
    let i = 0;
    let texts = [
        "Culture originating from Indonesia",
        "Needs to be cared for and preserved",
        "Become a cultural heritage"
    ];
    let speed = 65;
    let currentTextIndex = 0;
    let currentText = texts[currentTextIndex];
    let heroParagraph = document.getElementById("hero-paragraph");

    function typeWriter(){
        if(i < currentText.length){
            heroParagraph.innerHTML += currentText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else{
                currentTextIndex++;
                if (currentTextIndex < texts.length) {
                    setTimeout(function(){
                        heroParagraph.innerHTML = "";
                    }, 930);
                    currentText = texts[currentTextIndex];
                    i = 0;
                    setTimeout(typeWriter, 990); 
                }else{
                    currentTextIndex = 0;
                    typeWriter();
                }
        }
    }

    typeWriter();
});
