// @flow
import * as React from 'react';
import { Text, Control, Button, Form, FormControl, ListGroup, ListGroupItem, FormGroup, InputGroup } from 'react-bootstrap';
import { TaskRow } from '../components/TaskRow';
import Task from '../model/Task';
import './TasksPage.css';


export function TasksPage(props) {
    const [newTask, setNewTask] = React.useState("");
    const [tasks, setTasks] = React.useState([]);
    const [isDone, setIsDone] = React.useState([false]);
    const [filter, setFilter] = React.useState("all");
    const [counter, setCounter] = React.useState(0);
    
    function addTask(e){
        if (e.key === 'Enter'){
            e.preventDefault()
            setTasks(tasks.concat(new Task(e.target.value, false)));
            setIsDone(isDone.concat(false));
            setCounter(counter + 1);
            document.getElementById("create-course-form").reset();
        }
    }

    function reduceCounter(addition){
        setCounter(counter + addition);
    }

    function deleteTask(index) {
        if(!tasks[index].isCompleted) {
            alert("You deleted an open task");
            reduceCounter(-1);
        }
        const newTasksArr = tasks.filter((item)=>tasks.indexOf(item) !== index)
        setTasks(newTasksArr);
    }
    
    // const newList = list.filter((item) => item.id !== id);
 
    // setList(newList);

    //convert data to presentation
    let filteredTasks = tasks;

    if (filter === "active") {
        console.log("filter",filter)
        filteredTasks = filteredTasks.filter(task => !task.isCompleted)
    }
    else if (filter === "completed") {
        filteredTasks = filteredTasks.filter(task => task.isCompleted)
    }
    let tasksPresent = filteredTasks.map((task, index) => <TaskRow task={task} count={reduceCounter} isDeleted={deleteTask} index={index} key={index}/>)

  return (

    <div>
        <h1>Todos</h1>
        <Form id="create-course-form" value={newTask} >
            <FormControl type="text" placeholder="What's next?" onKeyPress={addTask}></FormControl>
            {/* <label class="custom-control-label" for="defaultChecked2">Default checked</label> */}
            {/* <Button onClick={test}>Add</Button> */}
        </Form>

        <ListGroup>
            {tasksPresent}
        </ListGroup>
        <Button onClick={()=>setFilter("all")}>All</Button>
        <Button onClick={()=>setFilter("active")}>Active</Button>
        <Button onClick={()=>setFilter("completed")}>Completed</Button>
        <span>{counter} items left</span>
    </div>
  );
};
