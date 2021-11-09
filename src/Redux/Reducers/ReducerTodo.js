import { ADDED,DONE,DELETE,EDIT,FILTRETASK } from "../Type";



 const intialeState={
     tasks:[{id:1,description:"HTMl",done:false },
     {id:2,description:"css",done:false}

    ],
    statutdone: ""
 };  
 export const ToDoList=(state=intialeState,action)=>{
      
switch(action.type){
    case ADDED: 
    return{
        ...state,tasks:[...state.tasks,{id:Math.random(),description:action.payload,done:false}]
    }
case DONE:
    return{
        ...state,tasks:state.tasks.map(task=>task.id===action.payload?{...task,done:!task.done}:task)
    }
case DELETE:
    return{
    ...state,tasks:state.tasks.filter(task=>task.id!==action.payload)
    }
    case EDIT:
        return{
    ...state,tasks:state.tasks.map((task)=>
    task.id===action.payload.id?{...task,description:action.payload.text}:task)
        }
        case FILTRETASK:
            return {
              ...state,
              statutdone: action.payload
            };
default:return state;
    }   }  
 