import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import s from "./FormAddStud.module.css";

const required = (value) => {
    if (value)
        return undefined;
    return 'Поле обязательно';
};

const isDate = (value) => {
    let regex = new RegExp("([0-9]{2}).([0-9]{2}).([0-9]{4})");
    if (regex.test(value) && value.length === 10)
        return undefined;
    return 'Формат даты не верен';
};

const isNumber = (value) => {
    if (typeof +value === 'number' && !isNaN(+value))
        return undefined;
    return 'Введите число';
};

const isRange = (value) => {
    if (value >=2 && value <= 5)
        return undefined;
    return 'Не верно введена оценка';
};

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            {props.children}
            { hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props} >
        <input {...input} {...restProps} ></input>
    </FormControl>
}

let FormAddStud = (props) => {
    return <form onSubmit = {props.handleSubmit} >
        <Field component = {Input} type={"text"} name = {"fio"} placeholder = {"ФИО"} validate = {[required]} />
        <Field component = {Input} type={"text"} name = {"birthday"} placeholder = {"Дата рождения (Например: 23.08.1992)"} validate = {[required, isDate]} />
        <Field component = {Input} type={"text"} name = {"mark"} placeholder = {"Успеваемость (2/3/4/5)"} validate = {[required, isNumber, isRange]} />

        <button>Добавить</button>
    </form>
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset("addStudForm"));
};

const FormAddStudReduxForm = reduxForm({form: 'addStudForm', onSubmitSuccess: afterSubmit})(FormAddStud);

export default FormAddStudReduxForm;