import {setDoc , doc, Timestamp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
import playersJSON from '../real-madrid/players.json' assert {type: 'json'}; 
import db from './config.js'


export default async function addPlayersToDB(objJSON){
    try {
      objJSON.forEach(async (item)=>{
        await setDoc(doc(db, "players", item.__id), {
          firstName : item.firstName,
          lastName : item.lastName,
          dob : Timestamp.fromDate(new Date(item.dob)),
          img_url : item.img_url,
          position : item.position,
          weight : item.weight,
          height : item.height,
          country : item.country,
          place_of_birth : item.place_of_birth
        });
        console.log("Document written with ID: ", item.__id);
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


//addPlayersToDB(playersJSON);