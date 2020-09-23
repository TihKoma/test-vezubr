import React from 'react';
import {connect, Provider} from "react-redux";
import store from "./store";
import Stud from "./components/stud";
import FormAddStud from "./components/FormAddStud";
import {addStud} from "./stud-reducer";



function StudList(props) {
  let studList = [...props.students].map(s => <Stud id={s.id} fio={s.fio} birthday={s.birthday} mark={s.mark} key={s.id} />);

  let saveStud = (formData) => {
    props.addStud(formData.fio, formData.birthday, formData.mark);
  };

  return (
    <div>
      {studList}
      <FormAddStud onSubmit={saveStud}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  students: state.stud.students
});

let StudListContainer = connect(mapStateToProps, {addStud})(StudList);

const StudApp = (props) => {
  return <Provider store = {store}>
      <StudListContainer />
  </Provider>
};

export default StudApp;
