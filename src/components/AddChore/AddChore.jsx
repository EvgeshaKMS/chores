import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import AddButton from "../AddButton/AddButton";
import Input from "../Input/Input";
import TimeInput from "../Input/TimeInput";
import classes from "./AddChore.module.css";

const AddChore = ({ create }) => {
  const formik = useFormik({
    initialValues: {
      time: "",
      task: "",
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
    onSubmit: (values) => {
      const newChore = {
        time: formik.values.time,
        task: formik.values.task,
        id: Date.now(),
      };
      create(newChore);
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
        {...formik.getFieldProps('time')}
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
        {...formik.getFieldProps('task')}
      />
      {formik.touched.task && formik.errors.task ? (
        <span className={classes.error}>{formik.errors.task}</span>
      ) : null}

      <AddButton type="submit" />
    </form>
  );
};

export default AddChore;
