import { useSelector } from 'react-redux'
import './App.css'
import TaskList from './components/taskList'
import styled from 'styled-components'
import TaskForm from './components/taskForm'
import { useNavigate } from 'react-router-dom'

const AppStyled = styled.div`
  .taskFlex{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .createButton{
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    button{
      border-radius: 1rem;
    }
  }
`

function App() {

  const taskState = useSelector(state => state.tasks)
  const navigate = useNavigate()

  return (
    <AppStyled>
      <div className="App">

        <div className="createButton">
          <button onClick={()=> navigate(`/new`) }>Create task</button>
        </div>
        <div className="taskFlex">
          {
            taskState.map(task => {
              return <TaskList key={task.id} {...task} />
            })
          }
        </div>
      </div>
    </AppStyled>
  )
}

export default App

