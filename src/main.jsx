import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import TaskForm from './components/taskForm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Tenemos el provider como en el context y le mandamos el store */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<App />} />
          <Route path='/new' element ={<TaskForm />} />
          <Route path='/edit/:id' element ={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
