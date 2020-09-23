const ADD_STUDENT = "APP/STUDENTS/ADD_STUDENT";
const DELETE_STUDENT = "APP/STUDENTS/DELETE_STUDENT";
const UPDATE_FIO = "APP/STUDENTS/UPDATE_FIO";

let initialState = {
    students: [{
        id: 1,
        fio: "Иванов Иван Иванович",
        birthday: "23.05.1993",
        mark: "5"
    }, {
        id: 2,
        fio: "Сидоров Петр Алексеевич",
        birthday: "13.04.1999",
        mark: "4"
    }]
};

let studReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_STUDENT:
            let newStud = {
                id: state.students[state.students.length-1].id + 1,
                fio: action.fio,
                birthday: action.birthday,
                mark: action.mark
            };
            return {
                ...state,
                students: [...state.students, newStud]
            };

        case DELETE_STUDENT:
            return {
                ...state,
                students: [...state.students].filter(stud => stud.id !== action.id)
            };
        case UPDATE_FIO:
            let index = state.students.findIndex((stud) => stud.id === action.id);
            state.students[index].fio = action.value;
            return {
                ...state,
                students: [...state.students]
            };
        default:
            return state;
    };
};

export const addStud = (fio, birthday, mark) => ({type: ADD_STUDENT, fio, birthday, mark});
export const deleteStudAC = (id) => ({type: DELETE_STUDENT, id});
export const updateFio = (id, value) => ({type: UPDATE_FIO, id, value});

export default studReducer;