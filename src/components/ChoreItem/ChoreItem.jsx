import React from "react";
import classes from "./ChoreItem.module.css";

const ChoreItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.container}>
        <div className={classes.content}>
          <span>{props.chore.time}</span>
          <div className={classes.content__name}>
            <span>{props.chore.task}</span>            
          </div>
        </div>
        <div className={classes.actions}>
          <a>Редактировать</a>
          <a>Выполнено</a>
          <a onClick={() => props.remove(props.chore)}>Удалить</a>
        </div>
      </div>
    </div>
  );
};

export default ChoreItem;
