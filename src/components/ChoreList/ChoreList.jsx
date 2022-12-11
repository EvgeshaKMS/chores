import React from "react";
import ChoreItem from "../ChoreItem/ChoreItem";
import classes from "./ChoreList.module.css";

const ChoreList = ({ chores, remove, edit }) => {
  return (
    <div className={classes.box}>
      <div className={classes.box__header}>
        <div className={classes.header__title}>
          <h3>Задачи на сегодня</h3>
          <span>21 окт 2019 (понедельник)</span>
        </div>
      </div>

      {chores.length ? (
        <div>
          {chores.map((chore) => (
            <ChoreItem
              remove={remove}
              edit={edit}
              chore={chore}
              key={chore.id}
            />
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Задач нет</h3>
      )}
    </div>
  );
};

export default ChoreList;
