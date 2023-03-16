import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTask } from '../features/tasks/tasksSlice'
import { useForm } from '../hooks/useForm'
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

const TaskFormStyled = styled.div`
    display: flex;
    justify-content: center;

    form{
        flex: 1;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        max-inline-size: 20rem;
        gap: 1rem;
    }
    .divError{
        background-color: #a70f0f;
    }
    input[type='text']{
        padding-inline: 1rem;
        padding-block: .5rem;
    }
`

function TaskForm() {

    const {form, onInputChange} = useForm({
        title: '',
        description: '',
        done: false
    })

    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const taskState = useSelector(state => state.tasks)

    const {id} = useParams()
    const [task, setTask] = useState('perro')

    
    let {title, description, done} = form 
    
    const onSubmit = (e) => {
        e.preventDefault()
        setError('')
        if(!title || !description || !done){
            return setError('Todos los campos son requeridos')
        }
        dispatch(addTask({
            ...form,
            id: uuid()
        }))
        navigate("/")
        
    }

    const onEdit = (e) => {
        e.preventDefault()
        
    }
    
    useEffect(()=> {
        if(id){
            const taskFound = taskState.find(task => task.id === id)
            setTask(taskFound)
        }
    },[])

    return (
        <TaskFormStyled>
            <form onSubmit={ id ? onEdit : onSubmit}>
                <input type="text" name="title" id="title" placeholder='Title' value={task ? task.title : title} onChange={onInputChange} />
                <input type="text" name="description" id="description" placeholder='Description' value={task ? task.description : description} onChange={onInputChange} />
                <div className="radios">
                    <input type="radio" id="done" name="done" value={true} onChange={onInputChange} />
                    <label htmlFor="done">Done</label>
                    <input type="radio" id="nodone" name="done" value={false} onChange={onInputChange} />
                    <label htmlFor="nodone">Not done</label>
                </div>
                {
                    !error ? null :
                    ( <div className="divError">{error}</div> )
                }
                <button type="submit">Save</button>
            </form>
        </TaskFormStyled>
    )
}

export default TaskForm
