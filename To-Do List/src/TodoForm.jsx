import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create'

import { useState } from 'react';

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("")
    const onChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(text)
        setText("")
    }
    return <ListItem>
        <form action="" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Add New Task" variant="standard" InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton aria-label="Create To-Do" type='submit'>
                        <Create/>
                    </IconButton>
                </InputAdornment>
            }} onChange={onChange} value={text} />
        </form>
    </ListItem>
} 