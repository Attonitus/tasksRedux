import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteTask } from '../features/tasks/tasksSlice'

const TaskListStyled = styled.div`
    .page{
        background-color: #303030;
        padding: 1rem;
        inline-size: 20rem;
        border-radius: 1rem;
    }
    .up{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buttons{
        display: flex;
        gap: .5rem;
        button{
            border-radius: 1rem;
        }
    }
    .done{
        text-decoration: line-through;
    }
    .down{
        text-align: start;
    }
`

function TaskList({title, description, id, done}) {

    const dispacth = useDispatch()
    const navigate = useNavigate()

    const onDelete = () => {
        dispacth(deleteTask(id))
    }

    const onEdit = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <TaskListStyled>
            <div className="page">
                <div className="up">
                    <h3 className={`${done === 'true' ? 'done' : ''}`}>{title}</h3>
                    <div className="buttons">
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </div>
                <div className={`down ${done === 'true' ? 'done' : ''}`}>
                    {description}
                </div>
            </div>
        </TaskListStyled>
    )
}

export default TaskList
