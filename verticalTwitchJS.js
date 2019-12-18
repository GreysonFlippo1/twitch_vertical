
let vertical = -1;
let width = 0;
let height = 0;

setInterval(checkOrientation,100);

function checkOrientation(){
    width = window.innerWidth;
    height = window.innerHeight;
    let vertical_old = vertical;
    if(height>=width){
        vertical = 1;
    }
    else{
        vertical = 0;
    }
    if(vertical != vertical_old){
        updateGUI();
    }
}

function updateGUI(){
    if(document.getElementsByClassName("tw-flex").length == 0){
        vertical = -1;
    }
    else{
        let twFlex = document.getElementsByClassName("tw-flex");
        for(let i = 0; i < twFlex.length; i++){
            twFlex[i].classList.add(`verticalTTV_${i}`);
        }
        //console.log(document.getElementsByClassName("verticalTTV_27")[0].children[2]); //Chat element
        if(document.getElementsByClassName("verticalTTV_27")[0].children[2].id){
            let chatID = document.getElementsByClassName("verticalTTV_27")[0].children[2].id
            let chat = document.getElementById(chatID);
            chat.style.width="100px";
        }
        //element 27 is significant
    }
}

