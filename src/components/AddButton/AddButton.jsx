import React from 'react'
import classes from './AddButton.module.css'

const AddButton = (props) => {
  return (
    <button {...props} className={classes.add_button}>
        <span>Добавить новую задачу</span>
    </button>
  )
}

export default AddButton