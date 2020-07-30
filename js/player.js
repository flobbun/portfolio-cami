//===========START========================//
function Start(){

songsDiv =[
    'aloneinthespace',
    'beakid',
    'disgrace',
    'endlesscycle',
    'freedom',
    'enjoy',
    'hide',
    'run',
    'uncertainty',
    'yellowpride',
    'pieceoflight',
    'life'
];

songs =[
    'aloneinthespaceSong',
    'beakidSong',
    'disgraceSong',
    'endlesscycleSong',
    'freedomSong',
    'enjoySong',
    'hideSong',
    'runSong',
    'uncertaintySong',
    'yellowprideSong',
    'pieceoflightSong',
    'lifeSong'
];


        //Getting ID's
        
    for (let i = 0; i < songsDiv.length; i++) {
        songsDiv[i] = document.getElementById(songsDiv[i]); 
    }

        //Add animations
    for(let i = 0; i < songsDiv.length; i++){
         songsDiv[i].className += " animate__animated animate__slideInUp";
    }    

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
    life.addEventListener("mouseover", playlife, true);
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
    life.addEventListener("mouseout", stopAll, true);

    console.log("Elements and listeners loaded!");
}
//===============================================//


Start();

//==============================================//
//=================Songs============================//
for (let i = 0; i < songs.length; i++) {
    songs[i] = document.getElementById(songs[i]); 
}
//==============================================//
function stopAll(){
    for (let i = 0; i < songs.length; i++) {
        songs[i].pause();
    }
}

function playlife(){
    stopAll();
    lifeSong.currentTime = 0;
    lifeSong.play();
}
function playaloneinthespace(){
    stopAll();
    aloneinthespaceSong.currentTime = 0;
    aloneinthespaceSong.play();
}
function playbeakid(){
    stopAll();
    beakidSong.currentTime = 0;
    beakidSong.play();
}
function playdisgrace(){
    stopAll();
    disgraceSong.currentTime = 0;
    disgraceSong.play();
}
function playendlesscycle(){
    stopAll();
    endlesscycleSong.currentTime = 0;
    endlesscycleSong.play();
}
function playfreedom(){
    stopAll();
    freedomSong.currentTime = 0;
    freedomSong.play();
}
function playenjoy(){
    stopAll();
    enjoySong.currentTime = 0;
    enjoySong.play();
}
function playhide(){
    stopAll();
    hideSong.currentTime = 0;
    hideSong.play();
}
function playrun(){
    stopAll();
    runSong.currentTime = 0;
    runSong.play();
}
function playuncertainty(){
    stopAll();
    uncertaintySong.currentTime = 0;
    uncertaintySong.play();
}
function playyellowpride(){
    stopAll();
    yellowprideSong.currentTime = 0;
    yellowprideSong.play();
}
function playpieceoflight(){
    stopAll();
    pieceoflightSong.currentTime = 0;
    pieceoflightSong.play();
}

