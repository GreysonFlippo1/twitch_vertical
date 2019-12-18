
let vertical = 0;
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
    
}

