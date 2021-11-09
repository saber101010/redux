import { useDispatch } from "react-redux"
import { done,deleteTask, } from "../Redux/Actions/ActionTodo"
import Modale from "./Mod"




function Task({task}){
    const dispatch=useDispatch()
    return(
        <div className="task">
 <p style={{ textDecoration: task.done && "line-through" }}>
        {task.description}
      </p>
<Modale  task={task}  />
<button onClick={()=>dispatch(done(task.id))}
>Done</button>
<button  onClick={()=>dispatch(deleteTask(task.id))}
>Delet</button>

        </div>
    )
}
export default Task