import {setDoc , doc, Timestamp} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
import db from './config.js'


export async function addPlayersToDB(objJSON){
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
          national_team : item.national_team,
          place_of_birth : item.place_of_birth,
          flag_url : item.flag_url,
          stats: {
                pace : item.stats.pace,
                shooting : item.stats.shooting,
                passing: item.stats.passing,
                dribbling: item.stats.dribbling,
                defense : item.stats.defense,
                physical : item.stats.physical
            }
        });
        console.log("Document written with ID: ", item.__id);
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


