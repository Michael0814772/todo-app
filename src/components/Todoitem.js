import { Button, Card, CardContent, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    taskContent: {
        display: 'flex',
    },
    card: {
        width: '60%',
        margin: '25px auto'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        marginLeft: '10px'
    },
    task: {
        flexGrow: 1
    },
    edit: {
        marginRight: '30px',
        padding: '0px'
    },
    delete: {
        padding: '0px'
    },
    secondContent: {
        marginBottom: '10px'
    },
    newTask: {
        padding: '10px'
    }
}))

export default function Todoitem({ task }) {

    const classess = useStyles();

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState('')

    function deleteTask(task) {

        dispatch({ type: 'DELETE_TASK', payload: task })
    }

    function editTask() {
        setShow(!show);
    }

    function finalEdit(task) {
        dispatch({ type: 'EDIT_TASK', payload: { oldTask: task, newTask: newTask } })
        setShow(false)
    }


    return (
        <Container className='todoItems-container'>

            <Card className={classess.card} id="card">
                <CardContent className={classess.taskContent}>
                    <Typography variant="h5" className={classess.task}>{task}</Typography>
                    <IconButton className={classess.edit} onClick={editTask} >
                        <EditIcon />
                    </IconButton>
                    <IconButton className={classess.delete} onClick={() => deleteTask(task)}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
                <div className={classess.secondContent}>
                    {show && <input type='text' placeholder='New Task' className={classess.newTask} value={newTask} onChange={(e) => setNewTask(e.target.value)} />}
                    {show && <Button color='secondary' variant='contained' className={classess.btn} onClick={() => finalEdit(task)}>Final Edit</Button>}
                </div>
                
            </Card>



            <div className='todoItems-2'>

            </div>
        </Container>
    )
}
