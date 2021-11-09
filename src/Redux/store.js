import {createStore} from "redux";
import {ToDoList} from "./Reducers/ReducerTodo";

const store = createStore(  
    ToDoList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store