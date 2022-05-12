import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
