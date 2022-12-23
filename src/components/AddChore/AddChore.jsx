import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import AddButton from "../AddButton/AddButton";
import Input from "../Input/Input";
import classes from "./AddChore.module.css";
import Chore from "../../Chore";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";

const AddChore = observer(() => {
  const formik = useFormik({
    initialValues: {
      time: "",
      task: "",
    },
    validationSchema: Yup.object({
      time: Yup.string().required("Выберите время"),
      task: Yup.string().required("Заполните поле"),
    }),  
    onSubmit: (values) => {
      const newChore = {
        time: formik.values.time,
        task: formik.values.task,
        id: Date.now(),
      };
      Chore.addChore(newChore);
      values.time = "";
      values.task = "";
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.main}>
      <Input
        type="time"
        name="time"
        placeholder="Время"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.time}
        {...formik.getFieldProps("time")}
      />
      {formik.touched.time && formik.errors.time ? (
        <span className={classes.error}>{formik.errors.time}</span>
      ) : null}
      <Input
        type="text"
        name="task"
        placeholder="Чем займемся?"
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.task}
        {...formik.getFieldProps("task")}
      />
      {formik.touched.task && formik.errors.task ? (
        <span className={classes.error}>{formik.errors.task}</span>
      ) : null}

      <AddButton type="submit" />
    </form>
  );
});

export default AddChore;
