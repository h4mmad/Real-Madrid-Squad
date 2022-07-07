import {getPlayersFromDB, getAllPlayerID} from './getFromDB.js'
// import playersJSON from '../real-madrid/players.json' assert {type: 'json'}; 


const playerList = await getPlayersFromDB();
const playerIDs = await getAllPlayerID();


const mainDiv = document.getElementById("main-div");




function paint(){
    playerList.forEach((element) => {
        const playerPic = document.createElement("img");
        const playerFlag = document.createElement("img");
        const playerCard = document.createElement("div");

        playerPic.src = element['img_url'];
        playerPic.setAttribute("class", "player-pic");

        playerFlag.src = element['flag_url'];
        playerFlag.setAttribute("class", "player-flag");

        playerCard.setAttribute("class", "player-card");



        playerPic.addEventListener("click", ()=>{
            console.log(element['flag_url']);
        });


        playerCard.append(playerPic);
        playerCard.append(playerFlag);
        mainDiv.append(playerCard);
    });
};



paint();






