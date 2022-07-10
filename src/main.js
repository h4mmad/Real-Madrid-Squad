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
        const toolTip = document.createElement("div");
        const toolTipText = document.createElement("span");

        const statDiv = document.createElement("div");
        statDiv.className = "flip-box-back";
        const pace = document.createElement("h4");
        pace.textContent = `Pace: ${element.stats.pace}`;
        const shooting = document.createElement("h4");
        shooting.textContent = `Shooting: ${element.stats.shooting}`; 
        const passing = document.createElement("h4"); 
        passing.textContent = `Passing: ${element.stats.passing}`;
        const dribbling = document.createElement("h4");
        dribbling.textContent = `Dribbling: ${element.stats.dribbling}`; 
        const defense = document.createElement("h4"); 
        defense.textContent = `Defense: ${element.stats.defense}`;
        const physical = document.createElement("h4");
        physical.textContent = `Physical: ${element.stats.physical}`;
        statDiv.append(pace);
        statDiv.append(shooting);
        statDiv.append(passing);
        statDiv.append(dribbling);
        statDiv.append(defense);
        statDiv.append(physical);

        const flipBoxInner = document.createElement("div");
        flipBoxInner.className = "flip-box-inner";

        const flipBox = document.createElement("div");
        flipBox.className = "flip-box";

        
        playerPic.src = element['img_url'];
        playerPic.setAttribute("class", "player-pic");

        playerFlag.src = element['flag_url'];
        playerFlag.setAttribute("class", "player-flag");

        playerCard.setAttribute("class", "flip-box-front");

        playerName.textContent = `${element.firstName} ${element.lastName}`;
        playerName.setAttribute("class", "player-name");

        toolTip.className = "tooltip";
        toolTipText.className = "tooltiptext";
        toolTipText.textContent = element.national_team;
        toolTip.append(playerFlag);
        toolTip.append(toolTipText);

        playerCard.append(playerPic);
        playerCard.append(playerName);
        playerCard.append(toolTip);
        

        flipBoxInner.addEventListener("click", (event)=>{
            flipBoxInner.classList.toggle("trans");
        })
        flipBoxInner.append(playerCard);
        flipBoxInner.append(statDiv);
        flipBox.append(flipBoxInner);
        mainDiv.append(flipBox);
    });
};



paint();






