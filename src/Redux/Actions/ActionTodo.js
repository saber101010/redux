import { ADDED,DELETE,DONE, EDIT,FILTRETASK } from "../Type"



export const added=(description)=>{
return {
    type:ADDED,
    payload:description
}

}
export const done=(id)=>{
    return{
        type:DONE,
        payload:id
    }
}
export const deleteTask=(id)=>{
    return{
        type:DELETE,
        payload:id
    }
}
export const edit=(id,text)=>{
    return{   
    type:EDIT,
    payload:{id,text}
} }
export const filtREtask=(statudone)=>{
    return{
        type:FILTRETASK,
        payload:{statudone}
    }
}