import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

//Componentes
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/Users'





function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

    <BrowserRouter>
      <h1>H</h1>
      <Routes>
        <Route path='/' element={Users}></Route>
        <Route path='/create' element={CreateUser}></Route>
        <Route path='/update' element={UpdateUser}></Route>
      </Routes>
    </BrowserRouter>


   </div>
  )
}

export default App
