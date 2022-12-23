import React from "react";
import Chore from "../../Chore";
import ChoreItem from "../ChoreItem/ChoreItem";
import classes from "./ChoreList.module.css";
import { observer } from "mobx-react-lite";

const ChoreList = observer(() => {
  return (
    <div className={classes.box}>
      <div className={classes.box__header}>
        <div className={classes.header__title}>
          <h3>Задачи на сегодня</h3>
          <span>21 окт 2019 (понедельник)</span>
        </div>
      </div>

      <ul className={classes.box__list}>
        {Chore.chores.length ? (
          <li>
            {Chore.chores.map((chore) => (
              <ChoreItem chore={chore} key={chore.id} />
            ))}
          </li>
        ) : (
          <li>
            <h3 style={{ textAlign: "center" }}>Задач нет</h3>
          </li>
        )}
      </ul>
    </div>
  );
});

export default ChoreList;
