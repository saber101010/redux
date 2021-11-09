import{Dropdown,DropdownButton}from  "react-bootstrap";
import { useDispatch } from "react-redux";
import { filtREtask } from "../Redux/Actions/ActionTodo";

function Filter(){
    const dispatch=useDispatch()
    return(   
        <>
         <DropdownButton id="dropdown-basic-button" title="Filtre">
      <Dropdown.Item onClick={() => dispatch(filtreTask("all"))}>
        all
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch(filtreTask("done"))}>
        done
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch(filtreTask("undone"))}>
        un-done
      </Dropdown.Item>
    </DropdownButton>
     </>
     )
}

export default Filter