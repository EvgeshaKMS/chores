import React, { useState } from "react";
import Input from "../Input/Input";
import classes from "./ChoreItem.module.css";
import { useFormik } from "formik";
import Chore from "../../Chore";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";

const ChoreItem = observer(({ chore }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  let time = chore.time;
  let task = chore.task;
  const formik = useFormik({
    initialValues: {
      time: `${time}`,
      task: `${task}`,
    },
    validationSchema: Yup.object({
      time: Yup.string().required("Выберите время"),
      task: Yup.string().required("Заполните поле"),
    }),
    onSubmit: (values) => {
      if (isInEditMode) {
        const editChore = {
          id: chore.id,
          time: formik.values.time,
          task: formik.values.task,
        };
        Chore.editChore(editChore);
        setIsInEditMode(false);
      } else {
        setIsInEditMode(true);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.item}>
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
            <button type="submit">Подтвердить</button>
          ) : (
            <button type="submit">Редактировать</button>
          )}
          <button>Выполнено</button>
          <button onClick={() => Chore.removeChore(chore.id)}>Удалить</button>
        </div>
      </div>
    </form>
  );
});

export default ChoreItem;
