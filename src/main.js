import {getPlayersFromDB, getAllPlayerID} from './getFromDB.js'
// import {addPlayersToDB} from './addToDB.js';
// import playersJSON from '../real-madrid/players.json' assert {type: 'json'}; 
//^^used for loading data in firestore^^

const playerList = await getPlayersFromDB();
const playerIDs = await getAllPlayerID();


const mainDiv = document.getElementById("main-div");

function $(element){
    return document.createElement(element);
}

function paint(){
    playerList.forEach((element) => {
        const playerPic = $('img');
        const playerFlag = $('img');
        const playerCard = $('div');
        const playerName = $('h3');
        const position = $('h3');
        const toolTip = $('div');
        const toolTipText = $('span');

        const statDiv = $('div');
        statDiv.className = "flip-box-back";

        const pace = $('p');
        const shooting = $('p');
        const passing = $('p');
        const dribbling = $('p');
        const defense = $('p');
        const physical = $('p');
        pace.textContent = `PAC: ${element.stats.pace}`;
        shooting.textContent = `SHO: ${element.stats.shooting}`; 
        passing.textContent = `PAS: ${element.stats.passing}`;
        dribbling.textContent = `DRI: ${element.stats.dribbling}`; 
        defense.textContent = `DEF: ${element.stats.defense}`;
        physical.textContent = `PHY: ${element.stats.physical}`;


        
        statDiv.append(pace);
        statDiv.append(shooting);
        statDiv.append(passing);
        statDiv.append(dribbling);
        statDiv.append(defense);
        statDiv.append(physical);
        

        const flipBoxInner = $("div");
        flipBoxInner.className = "flip-box-inner";

        const flipBox = $("div");
        flipBox.className = "flip-box";

        
        playerPic.src = element['img_url'];
        playerPic.setAttribute("class", "player-pic");

        playerFlag.src = element['flag_url'];
        playerFlag.setAttribute("class", "player-flag");

        playerCard.setAttribute("class", "flip-box-front");

        playerName.textContent = `${element.firstName} ${element.lastName}`;
        playerName.setAttribute("class", "player-name");

        position.textContent = element.position;
        position.className = "position";

        toolTip.className = "tooltip";
        toolTipText.className = "tooltiptext";
        toolTipText.textContent = element.national_team;
        toolTip.append(playerFlag);
        toolTip.append(toolTipText);

        playerCard.append(playerPic);
        playerCard.append(playerName);
        playerCard.append(position);
        playerCard.append(toolTip);
        

        // const myModal = $("div");
        // [myModal.id, myModal.className] = ["myModal", "modal"];


        // const modalContent = $("div");
        // modalContent.className = "modal-content";

        
        // modalContent.append(pace);
        // modalContent.append(shooting);
        // modalContent.append(passing);
        // modalContent.append(dribbling);
        // modalContent.append(defense);
        // modalContent.append(physical);
        
        
        // const close = $("span");
        // close.className = "close";
        // close.innerHTML = "&times;";
        // close.onclick = function() {
        //     myModal.style.display = "none";
        //   }

        // modalContent.appendChild(close);
        // modalContent.append(statDiv);
        // myModal.appendChild(modalContent);
        
        flipBoxInner.addEventListener("click", (event)=>{
            flipBoxInner.classList.toggle("trans");   
            // myModal.style.display = "block"        
        })


        flipBoxInner.append(playerCard);
        flipBoxInner.append(statDiv);
        flipBox.append(flipBoxInner);
        mainDiv.append(flipBox);
        // mainDiv.append(myModal);
    });
};

paint();






