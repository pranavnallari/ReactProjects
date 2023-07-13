import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid'
import { Box, Typography } from '@mui/material';


const getSeed = () => {
    const seedData = JSON.parse(localStorage.getItem('todos'))
    if (!seedData) return [];
    return seedData;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getSeed)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const removeTodo = function (id) {
        setTodos(prevTodos => { return prevTodos.filter(t => t.id !== id) })
    }
    const toggleTodo = function (id) {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: uuid(), completed: false }]
        })
    }
    return <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        alignItems:'center',
        m:3
    }}>
        <Typography variant="h3" component="h3" sx={{ flexGrow: 1 }}>
        To-Do List
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
            })}
            <TodoForm addTodo={addTodo} />
        </List>
    </Box>
}


