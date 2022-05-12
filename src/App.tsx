import React from 'react';
import CardHolder from "./Components/AddCard"
import MapList from './Components/List'

import styles from '../mainStyles.module.css'
//Simple click button to add a card, which will get mapped out, maybe local storages
const App = () => {
  return (
   <div>
    <div className={styles.big}>
      <CardHolder />

      <MapList />
    </div>
    <div className={styles.blackBar}>
      Bottom Bar
    </div>
  </div>
  )
}

export default App
