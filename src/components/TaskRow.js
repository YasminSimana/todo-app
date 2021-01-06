// @flow
import * as React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';
import './TaskRow.css';
import { BsXSquare } from "react-icons/bs";

export function TaskRow(props) {
    const {task, count, isDeleted, index} = props;
    const [isCompleted, setIsCompleted] = React.useState(task.isCompleted);
    const [toDelete, setToDelete] = React.useState(false);
    

    function markIsCompleted(e){
        task.isCompleted = !task.isCompleted;
        setIsCompleted(task.isCompleted);
        let addition = 1;
        if (task.isCompleted){
            addition = -1;
        }
        count(addition);
    }

    function enterRow(){
        setToDelete(true);
        deleteClassesObj = "";
    }

    function leaveRow() {
        setToDelete(false);
        deleteClassesObj = "invisibleIcon";
    }

    function deleteTask(){
        console.log("key", index)
        isDeleted(index);
    }

    //convert data into presentation
    function classNames(classes) {
        return Object.entries(classes)
          .filter(([key, value]) => value)
          .map(([key, value]) => key)
          .join(' ');
    }
    
    let rowClassesObj = classNames({
        'completed': isCompleted,
        'is-hover': toDelete
    });

    let deleteClassesObj = "";
    
    let taskRow = 
    <ListGroupItem className={rowClassesObj} onMouseEnter={enterRow} onMouseLeave={leaveRow} variant="light" >{task.description}
        <input value={isCompleted} onChange={markIsCompleted} type="checkbox" className="on-front" id="defaultChecked2"/>
        <Button className="invisible-icon" onClick={deleteTask}>
            <BsXSquare></BsXSquare>
        </Button>
    </ListGroupItem>    
 

    return (
        <div>
            {taskRow}
        </div>
    );
};