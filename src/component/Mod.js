import { useState } from "react";
import {Modal,Button,FormControl} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { edit } from "../Redux/Actions/ActionTodo";

        function Modale({task}) {
             const [text,setText]=useState(task.description);
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

          const dispatch=useDispatch();
       
            return (
              <>
                <Button  
                variant="primary" onClick={handleShow}>
                  Edit
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                 
                  <Modal.Footer>
                  <FormControl
            type="text"
            placeholder="enter newdesciption"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button 
                    onClick={()=>{dispatch(edit(task.id,text));handleClose()}}
                    
                    variant="primary">
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          export default Modale
       


    

