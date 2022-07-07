import {getDocs, collection, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
import db from './config.js'

export async function getPlayersFromDB(){
    const querySnapshot = await getDocs(collection(db, "players"));
    const playerList = []
    querySnapshot.forEach((doc) => {
        playerList.push(doc.data())
    });
    return playerList;
}

export async function getAllPlayerID(){
    const querySnapshot = await getDocs(collection(db, "players"));
    const idList = []
    querySnapshot.forEach((doc) => {
        idList.push(doc.id)
    });
    return idList;
}
