import React, { useState } from 'react';
import InputForm from './InputForm';
import styles from '../../mainStyles.module.css'

import { db } from '../firestoreConfig';
import { collection, addDoc } from "firebase/firestore";

export const CardHolder = () => {

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");


//Function is async because we will need to connect to furebase
  async function addCard(name, info){
    console.log(name, ": ",info);

    if(name == "" || info == ""){
      console.log("Can't be undefined") //Make into an alert
    }
    else {
      //Use Firebase to hold items
      //This creates fields in our firebase document going to need // TODO:
      //Add a user function so you don't snatch others stuff
      await addDoc(collection(db, "tasks"), {
        name,
        info,
        completed: false,
      });
      setDescription("");
      setTitle("");
    }
  }


//Copes with the nonasync fucntion of onchange
  function infoAdd(info){
    setDescription(info);
  }
  function titleAdd(name){
    setTitle(name);
  }

  //Should round out the text space


  //Below we intake InputForm from outside this file
  return (
    <div className={styles.centerItem}>
     <h1>
      What To Do?
     </h1>
      <InputForm placeholder="Add a Title" addCard={(val) => titleAdd(val)} />
      <InputForm placeholder="Add Some Details" addCard={(val) => infoAdd(val)} />
      <button
      onClick={() => addCard(title, description)}
      >
      <p>  Add a Card </p>
      </button>
    </div>
  )
}


export default CardHolder;
