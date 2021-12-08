import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'red',
        padding: 10
    },
    todoList: {
        margin: '0px auto',
        fontSize: `calc(20px + 2vmin)`,
    }
}))

export default function Navbar() {

    const classess = useStyles();

    const taskObj = useSelector(store => store);

    return (
        <div>
            <AppBar className={classess.appbar} elevation={0}>
                <Toolbar>
                    <Typography variant="h3" className={classess.todoList}>
                        TodoList , Total tasks: {taskObj.taskItems.length}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
