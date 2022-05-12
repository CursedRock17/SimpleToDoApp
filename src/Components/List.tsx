import React from 'react';
import styles from '../../mainStyles.module.css'
import { db } from '../firestoreConfig';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";


//Add mapping function from localStorage

const removeTask = async(id) => {
  await deleteDoc(doc(db, "tasks", id));
}

export const MapList = () => {
  const [todos, setTodos] = React.useState([]);

  //Any time we make changes to the page we want to query throughout
  //our firebase to show the user all of the tasks

  React.useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id, title: doc.data().name, completed: doc.data().completed, task: doc.data().info });
        console.log(doc.data())
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

/*Map function in which we can create small components that are nice*/

  const totalTask = todos.map((namedTask) =>
        <div>
          <li className={styles.card}>
          {namedTask.completed == false ?
            <>
            <h1>
            <button
            className={styles.remove}
            onClick={() => removeTask(namedTask.id)}
            >
            <p> X </p>
            </button>

            {namedTask.title}
            </h1>
            <p>{namedTask.info}</p>
            </>
            :
            <> </>
          }
          </li>
        </div>
      );

  return (
    <div>
      <h1 className={styles.header}>
        Things To Do:
      </h1>
      <ul>
        {totalTask}
      </ul>
    </div>
  )
}

export default MapList;
