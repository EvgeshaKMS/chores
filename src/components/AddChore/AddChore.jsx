import React, { useState, useEffect } from "react";
import AddButton from "../AddButton/AddButton";
import Input from "../Input/Input";
import TimeInput from "../Input/TimeInput";
import classes from "./AddChore.module.css";

const AddChore = ({ create }) => {
  const [chore, setChore] = useState({ time: "", task: "" });
  const [timeError, setTimeError] = useState("Укажите время");
  const [taskError, setTaskError] = useState("Заполните поле");
  const [formValid, setFormValid] = useState(false);
  //добавить два useState, чтобы устанавливать required и тп
  

  useEffect(() => {
    if (timeError || taskError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [timeError, taskError]);

  const timeHandler = (e) => {
    setChore({ ...chore, time: e.target.value });
    if (!e.target.value) {
      setTimeError("Укажите время");
    } else if (e.target.value.includes('_')) {
      setTimeError("Укажите корректное время");
    } else {
      setTimeError(""); 
    }
  };

  const taskHandler = (e) => {
    setChore({ ...chore, task: e.target.value });
    if (!e.target.value) {
      setTaskError("Заполните поле");
    } else {
      setTaskError("");
    }
  };

  const addNewChore = (e) => {
    e.preventDefault();
    const newChore = {
      ...chore,
      id: Date.now(),
    };
    create(newChore);
    setChore({ time: "", task: "" });
    setFormValid(false);
    setTimeError("Укажите время");
    setTaskError("Заполните поле");
  };

  return (
    <div className={classes.main}>
      <TimeInput
        value={chore.time}
        type="text"
        placeholder="Время"
        timeError={timeError}
        onChange={(e) => timeHandler(e)}
      />
      <Input
        value={chore.task}
        type="text"
        placeholder="Чем займемся?"
        taskError={taskError}
        onChange={(e) => taskHandler(e)}
      />
      <AddButton disabled={!formValid} onClick={addNewChore} />
    </div>
  );
};

export default AddChore;
