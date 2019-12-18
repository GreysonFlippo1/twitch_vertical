
let vertical = -1;
let width = 0;
let height = 0;
let chat;
let about;

setInterval(checkOrientation,100);

function checkOrientation(){
    width = window.innerWidth;
    height = window.innerHeight;
    let vertical_old = vertical;

    if(chat && vertical == 1){
        chat.children[0].classList.remove("tw-hide");
        chat.style.width="100%";
        chat.style.height="50vh";
        chat.style.paddingBottom="75px";
        chat.children[0].classList.remove("tw-hide");
        chat.children[0].style.height="50vh";
        chat.children[0].children[0].children[0].style.width="100%";
        document.getElementsByClassName("channel-root__right-column")[0].style.width="100%";
    }
    else if(chat && vertical == 0){
        chat.style.width="350px";
        chat.style.height="100%";
        chat.style.paddingBottom="0px";
        chat.children[0].style.height="100%";
        chat.children[0].children[0].children[0].style.width="350px";
        document.getElementsByClassName("channel-root__right-column")[0].style.width="350px";
    }

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
        if(vertical == 1){
            let twFlex = document.getElementsByClassName("tw-flex");

            for(let i = 0; i < twFlex.length; i++){
                twFlex[i].classList.add(`verticalTTV_${i}`);
            }
    
            if(!chat && document.getElementsByClassName("verticalTTV_27")[0].children[2] && document.getElementsByClassName("verticalTTV_27")[0].children[2].id){
                let chatID = document.getElementsByClassName("verticalTTV_27")[0].children[2].id;
                chat=document.getElementsByClassName("verticalTTV_27")[0].removeChild(document.getElementById(chatID));
            }
    
            if(chat){;
                if(!about){
                    about = document.getElementsByClassName("channel-root")[0].removeChild(document.getElementsByClassName("tw-pd-x-2")[0]);
                    document.getElementsByClassName("channel-root")[0].appendChild(chat);
                    document.getElementsByClassName("channel-root")[0].appendChild(about);
                }
            }
        }

        else if(vertical == 0){
            if(chat){
                document.getElementsByClassName("verticalTTV_27")[0].appendChild(chat);
                about=null;
            }
        }
    }

}

