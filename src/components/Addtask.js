import { Container, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    task: {
        color: 'black',
        margin: '50px auto 15px auto',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    field: {
        width: '50%'
    },
    form: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    btn: {
        padding: '13px 17px',
        marginLeft: '10px'
    }
}))

export default function Addtask() {

    const classess = useStyles();

    const [taskName, setTaskName] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch();

    function addTask(e) {
        e.preventDefault();

        if (taskName === '') {
            setError(true)
        } else {
            dispatch({ type: 'ADD_TASK', payload: taskName })
            setError(false)
        }        
        setError(false)
    }

    return (
        <Container>
            <div className={classess.toolbar}></div>
            <Typography
                className={classess.task}
                variant='h4'
            >
                Add Task
            </Typography>

            <form noValidate autoComplete='off' className={classess.form}>
                <TextField
                    label='Enter Task Name'
                    variant='outlined'
                    color='primary'
                    required
                    className={classess.field}
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    error={error}
                />
                <Button
                    onClick={addTask}
                    variant='contained'
                    color='secondary'
                    className={classess.btn}
                >Add Task</Button>
            </form>
        </Container>
    )
}
