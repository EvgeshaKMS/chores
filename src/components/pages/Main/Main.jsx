import React from "react";
import AddChore from "../../AddChore/AddChore";
import ChoreList from "../../ChoreList/ChoreList";
import classes from "./Main.module.css";
import { observer } from 'mobx-react-lite';

const Main = observer(() => { 

  return (
    <div className={classes.main}>
      <AddChore/>
      <ChoreList/>
    </div>
  );
});

export default Main;
