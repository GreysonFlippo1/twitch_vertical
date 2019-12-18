
let vertical = -1;
let width = 0;
let height = 0;
let chat;
let about;

setInterval(checkOrientation,100);

function checkOrientation(){
    width = window.innerWidth;
    height = window.innerHeight;
    //let vertical_old = vertical;
    if(height>=width){
        vertical = 1;
    }
    else{
        vertical = 0;
    }
    // if(vertical != vertical_old){
    //     updateGUI();
    // }
    updateGUI();
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
        if(!chat && document.getElementsByClassName("verticalTTV_27")[0].children[2] && document.getElementsByClassName("verticalTTV_27")[0].children[2].id){
            let chatID = document.getElementsByClassName("verticalTTV_27")[0].children[2].id
            //chat = document.getElementById(chatID);
            chat=document.getElementsByClassName("verticalTTV_27")[0].removeChild(document.getElementById(chatID));
            //chat.style.width="100px";
        }
        if(chat){
            //document.getElementsByClassName("verticalTTV_27")[0].removeChild[2];
            if(!about){
                about = document.getElementsByClassName("channel-root")[0].removeChild(document.getElementsByClassName("tw-pd-x-2")[0]);
                document.getElementsByClassName("channel-root")[0].appendChild(chat);
                document.getElementsByClassName("channel-root")[0].appendChild(about);
            }
            chat.style.width="100%";
            chat.style.height="50vh";
            chat.style.paddingBottom="75px";
            chat.children[0].classList.remove("tw-hide");
            chat.children[0].style.height="50vh";
            document.getElementsByClassName("verticalTTV_86")[0].style.width="100%";
            //chat.children[0].style.display="block!important";
        }
        //element 27 is significant
    }
}

