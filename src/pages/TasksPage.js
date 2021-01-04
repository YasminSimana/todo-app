// @flow
// import { Button } from 'react-bootstrap/Button';
import * as React from 'react';
import { Text, Control, Button, Form, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import Task from '../model/Task';

export function TasksPage(props) {
    const {test} = props;
    const [tasks, setTasks] = React.useState([]);
    
    function addTask(e){
        if (e.key === 'Enter'){
            setTasks(tasks.concat(new Task(e.target.value, false)));
            // alert(e.target.value);
        }
        
    }
    console.log(tasks)

    //convert data to presentation

  return (

    <div>
        <h1>Todos</h1>

        <Form>
            <FormControl type="text" placeholder="What's next?" onKeyPress={addTask}></FormControl>
            {/* <Button onClick={test}>Add</Button> */}
        </Form>

        <ListGroup>
        </ListGroup>

    </div>
  );
};