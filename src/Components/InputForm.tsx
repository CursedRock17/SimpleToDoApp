import React from 'react';
import styles from '../../mainStyles.module.css'

export const InputForm = (props) => {
  return (
    <div className={styles.addBox}>
      <textarea
      placeholder={props.placeholder}
      onChange={(val) => props.addCard(val.target.value)}
      >

      </textarea>
    </div>
  )
}

export default InputForm;
