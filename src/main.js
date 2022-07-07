import {getPlayersFromDB} from './getFromDB.js'

const mainDiv = document.getElementById("main-div");

async function paint(){
    const playerList = await getPlayersFromDB();
    playerList.forEach(element => {
        const playerPic = document.createElement("img");
        playerPic.src = element.img_url;
        playerPic.setAttribute("class", "player");
        playerPic.addEventListener("click", ()=>{
            console.log(element);
        });
        mainDiv.append(playerPic);
    });
};

paint();



