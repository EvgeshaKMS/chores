import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./ChoreItem.module.css";
import { useFormik } from "formik";

const ChoreItem = ({ chore, remove, edit }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  let time = chore.time;
  let task = chore.task;
  const formik = useFormik({
    initialValues: {
      time: `${time}`,
      task: `${task}`,
    },
    validate: (values) => {
      const errors = {};
      if (!values.time) {
        errors.time = "Выберите время";
      }
      if (!values.task) {
        errors.task = "Заполните поле";
      }
      return errors;
    },
    // onSubmit: (values) => {
    //   const editChore = {
    //     time: formik.values.time,
    //     task: formik.values.task,
    //     id: chore.id,
    //   };
    //   edit(editChore);
    //   console.log('123');
    //   // time = formik.values.time;
    //   // task = formik.values.task;
    // },
  });

  const submitEdit = () => {
    const editChore = {
      time: formik.values.time,
      task: formik.values.task,
      id: chore.id,
    };
    edit(editChore);
    setIsInEditMode(false)
  }


  return (
    <div className={classes.item}>
      <div className={classes.container}>
        {isInEditMode ? (
          <div className={classes.content}>
            <div className={classes.content__time}>
              <Input
                type="time"
                name="time"
                {...formik.getFieldProps("time")}
                className={classes.time_input}
              />
              {formik.touched.time && formik.errors.time ? (
                <span className={classes.error}>{formik.errors.time}</span>
              ) : null}
            </div>

            <div className={classes.content__name}>
              <div className={classes.name_box}>
                <Input
                  type="text"
                  name="task"
                  {...formik.getFieldProps("task")}
                  className={classes.task_input}
                />
                {formik.touched.task && formik.errors.task ? (
                  <span className={classes.error}>{formik.errors.task}</span>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.content}>
            <span>{time}</span>
            <div className={classes.content__name}>
              <span>{task}</span>
            </div>
          </div>
        )}

        <div className={classes.actions}>
          {isInEditMode ? (
            <a onClick={submitEdit}>
              Подтвердить
            </a>
          ) : (
            <a onClick={() => setIsInEditMode(true)}>Редактировать</a>
          )}
          <a>Выполнено</a>
          <a onClick={() => remove(chore)}>Удалить</a>
        </div>
      </div>
    </div>
  );
};

export default ChoreItem;
