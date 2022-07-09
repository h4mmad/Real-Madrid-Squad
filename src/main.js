import {getPlayersFromDB, getAllPlayerID} from './getFromDB.js'
// import {addPlayersToDB} from './addToDB.js';
// import playersJSON from '../real-madrid/players.json' assert {type: 'json'}; 


const playerList = await getPlayersFromDB();
const playerIDs = await getAllPlayerID();


const mainDiv = document.getElementById("main-div");




function paint(){
    playerList.forEach((element) => {
        const playerPic = document.createElement("img");
        const playerFlag = document.createElement("img");
        const playerCard = document.createElement("div");
        const playerName = document.createElement("h3");
        
        playerPic.src = element['img_url'];
        playerPic.setAttribute("class", "player-pic");

        playerFlag.src = element['flag_url'];
        playerFlag.setAttribute("class", "player-flag");
        playerFlag.setAttribute("title", element.national_team);

        playerCard.setAttribute("class", "player-card");

        playerName.textContent = `${element.firstName} ${element.lastName}`;
        playerName.setAttribute("class", "player-name");

        



        playerPic.addEventListener("click", ()=>{
            console.log(element['flag_url']);
        });


        playerCard.append(playerPic);
        playerCard.append(playerName);
        playerCard.append(playerFlag);
        mainDiv.append(playerCard);
        console.log(element.country);
    });
};



paint();






