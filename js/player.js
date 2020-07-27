//===========START========================//
function Start(){

        //Getting ID's
    aloneinthespace = document.getElementById("aloneinthespace"); 
    beakid = document.getElementById("beakid"); 
    disgrace = document.getElementById("disgrace"); 
    endlesscycle = document.getElementById("endlesscycle"); 
    freedom = document.getElementById("freedom"); 
    enjoy = document.getElementById("enjoy"); 
    hide = document.getElementById("hide"); 
    run = document.getElementById("run"); 
    uncertainty = document.getElementById("uncertainty"); 
    yellowpride = document.getElementById("yellowpride"); 
    pieceoflight = document.getElementById("pieceoflight"); 
        //Mouse Over
    aloneinthespace.addEventListener("mouseover", playaloneinthespace, true);
    beakid.addEventListener("mouseover", playbeakid, true);
    disgrace.addEventListener("mouseover", playdisgrace, true);
    endlesscycle.addEventListener("mouseover", playendlesscycle, true);
    freedom.addEventListener("mouseover", playfreedom, true);
    enjoy.addEventListener("mouseover", playenjoy, true);
    hide.addEventListener("mouseover", playhide, true);
    run.addEventListener("mouseover", playrun, true);
    uncertainty.addEventListener("mouseover", playuncertainty, true);
    yellowpride.addEventListener("mouseover", playyellowpride, true);
    pieceoflight.addEventListener("mouseover", playpieceoflight, true);
        //Mouse Out
    aloneinthespace.addEventListener("mouseout", stopAll, true);
    beakid.addEventListener("mouseout", stopAll, true);
    disgrace.addEventListener("mouseout", stopAll, true);
    endlesscycle.addEventListener("mouseout", stopAll, true);
    freedom.addEventListener("mouseout", stopAll, true);
    enjoy.addEventListener("mouseout", stopAll, true);
    hide.addEventListener("mouseout", stopAll, true);
    run.addEventListener("mouseout", stopAll, true);
    uncertainty.addEventListener("mouseout", stopAll, true);
    yellowpride.addEventListener("mouseout", stopAll, true);
    pieceoflight.addEventListener("mouseout", stopAll, true);

    console.log("Elements and listeners loaded!");
}
//===============================================//


Start();


//=================Songs============================//
aloneinthespaceSong = document.getElementById("aloneinthespaceSong"); 
beakidSong = document.getElementById("beakidSong"); 
disgraceSong = document.getElementById("disgraceSong"); 
endlesscycleSong = document.getElementById("endlesscycleSong"); 
freedomSong = document.getElementById("freedomSong"); 
enjoySong = document.getElementById("enjoySong"); 
hideSong = document.getElementById("hideSong"); 
runSong = document.getElementById("runSong"); 
uncertaintySong = document.getElementById("uncertaintySong"); 
yellowprideSong = document.getElementById("yellowprideSong"); 
pieceoflightSong = document.getElementById("pieceoflightSong"); 
//==============================================//

function stopAll(){
    aloneinthespaceSong.pause();
    beakidSong.pause();
    disgraceSong.pause();
    endlesscycleSong.pause();
    freedomSong.pause();
    enjoySong.pause();
    hideSong.pause();
    runSong.pause();
    uncertaintySong.pause();
    yellowprideSong.pause();
    pieceoflightSong.pause();
}


function playaloneinthespace(){
    stopAll();
    aloneinthespaceSong.currentTime = 0;
    aloneinthespaceSong.play();

    console.log("Playing 'Be a kid' ");
}
function playbeakid(){
    stopAll();
    beakidSong.currentTime = 0;
    beakidSong.play();

    console.log("Playing 'Alone in the space' ");
}
function playdisgrace(){
    stopAll();
    disgraceSong.currentTime = 0;
    disgraceSong.play();

    console.log("Playing 'Be a kid' ");
}
function playendlesscycle(){
    stopAll();
    endlesscycleSong.currentTime = 0;
    endlesscycleSong.play();

    console.log("Playing 'Alone in the space' ");
}
function playfreedom(){
    stopAll();
    freedomSong.currentTime = 0;
    freedomSong.play();

    console.log("Playing 'Be a kid' ");
}
function playenjoy(){
    stopAll();
    enjoySong.currentTime = 0;
    enjoySong.play();

    console.log("Playing 'Alone in the space' ");
}
function playhide(){
    stopAll();
    hideSong.currentTime = 0;
    hideSong.play();

    console.log("Playing 'Be a kid' ");
}
function playrun(){
    stopAll();
    runSong.currentTime = 0;
    runSong.play();

    console.log("Playing 'Alone in the space' ");
}
function playuncertainty(){
    stopAll();
    uncertaintySong.currentTime = 0;
    uncertaintySong.play();

    console.log("Playing 'Be a kid' ");
}
function playyellowpride(){
    stopAll();
    yellowprideSong.currentTime = 0;
    yellowprideSong.play();

    console.log("Playing 'Alone in the space' ");
}
function playpieceoflight(){
    stopAll();
    pieceoflightSong.currentTime = 0;
    pieceoflightSong.play();

    console.log("Playing 'Alone in the space' ");
}

