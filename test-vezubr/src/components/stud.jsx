import React, {useState} from 'react';
import s from './stud.module.css';
import {deleteStudAC, updateFio} from "./../stud-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


let Stud = (props) => {
    const deleteStud = (id) => () => {
        props.deleteStudAC(id);     // удаление записи в store
    };

    let [switcher, setSwitcher] = useState(false); // false - отображение span, true - input
    let [fio, setFio] = useState(props.fio);

    const activateEditMode = () => {
        setSwitcher(true);
    };

    const deactivateEditMode = () => {
        props.updateFio(props.id, fio);
        setSwitcher(false);
    };

    const onFioChange = (e) => {
        setFio(e.currentTarget.value);
    };

    return <>
        {!switcher &&
            <span onClick={activateEditMode}>{props.fio}</span>
        }
        {switcher &&
            <input  onChange={onFioChange} autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={fio}/>
        }
        &nbsp;
        <span>{props.birthday}</span> &nbsp;
        <span>{props.mark}</span>
        <span className={s.close} onClick={deleteStud(props.id)}>x</span>
        <br/>
    </>
};

let StudContainer = compose(
    React.memo,
    connect(null, {deleteStudAC, updateFio}))(Stud);

export default StudContainer;