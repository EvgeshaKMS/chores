import React, { useState } from "react";
import AddChore from "../../AddChore/AddChore";
import ChoreList from "../../ChoreList/ChoreList";
import classes from "./Main.module.css";

const MainContent = () => {
  const [chores, setChores] = useState([
    // { id: 1,time: "10:00", task: "Пропылесосить" },
    // { id: 2,time: "13:00", task: "Помыть посуду" },
  ]);

  const createChore = (newChore) => {
    setChores([...chores, newChore]);
  };

  const removeChore = (chore) => {
    setChores(chores.filter((p) => p.id !== chore.id));
  };

  const editChore = (choreValues) => {
    const choreItem = chores.find((chore) => chore.id === choreValues.id);
    if (choreItem) {
      choreItem.time = choreValues.time;
      choreItem.task = choreValues.task;
    }
  };

  return (
    <div className={classes.main}>
      <AddChore create={createChore} />
      <ChoreList remove={removeChore} edit={editChore} chores={chores} />
    </div>
  );
};

export default MainContent;
