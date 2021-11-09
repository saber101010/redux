import { useState } from "react"
import { useDispatch } from "react-redux"
import {added} from "../Redux/Actions/ActionTodo"


function Add(){
    const[description,setDescription]=useState("")
    const dispatch=useDispatch()
    return(
        <div>
<input  onChange={(e)=>setDescription(e.target.value)} />
<button onClick={()=>dispatch(added(description))}
 >Add</button>


        </div>
    )
}

export default Add
