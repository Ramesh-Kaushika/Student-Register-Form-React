
import './App.css'
import Login from "./pages/Login/Login.jsx";
import RegisterForm from "./pages/RegisterForm/RegisterForm.jsx";
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";


function App() {


  return (
      <div className={'myStyle'}>

          <Routes>
              <Route path={'*'} element={<Navigate to={'/login'}/>}/>
              <Route path={'/form'} element={<RegisterForm/>}/>
              <Route path={'/login'} element={<Login/>}/>
          </Routes>

      </div>
  )
}

export default App
