import { useState } from 'react'

import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'  
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'
import { Routes,Route,Link} from 'react-router-dom'



function App() {
  const [navmode,setNavMode]=useState("light")
  const[sbtn,setSbtn]=useState("Enable dark mode")
  const [scolor,setScolor]=useState("dark")
  
  const moding=()=>{
    if(navmode=="dark"){
      setNavMode("light")
      setSbtn("Enable dark mode")
      setScolor("black")
      document.body.style.backgroundColor="white"
      showalert("Light mode has been enabled","success")
      document.title="TextUtils Light Mode"
    }
    else{
      setNavMode("dark")
      setSbtn("Enable light mode")
      setScolor("light")
      document.body.style.backgroundColor="grey"
      showalert("Dark mode has been enabled","success")
      document.title="TextUtils Dark Mode"
    }
  }

  const [alert, setAlert] = useState(null)
  const showalert=(message,type)=>{
      setAlert(
        {
          msg:message,
          type:type
        }
      )
      setTimeout(()=>{
        setAlert(null)
      },2000);
  }


  // this is for the green mode

  const [green,setGreen]=useState("light")
  const[sg,setSg]=useState("light")
  const getgreen=()=>{
    if(green=="light"){
      setGreen("success")
      setSg("green")
    }
    else {
      setGreen("light")
      setSg("light")
    }
    if(navmode=="light"){
      setNavMode("success")
    }else{
      setNavMode("light")
    }
  }
  

  return (
    <>
    
     <Navbar title ="TextUtils" about="About-TextUtils" mode={navmode} moding={moding} setbtn={sbtn} scolor={scolor} gmode={getgreen} gr={green} sg={sg}/>
     <Alert alert={alert}/>
     <Routes>
      <Route path='/about' element={<About mode={navmode} scolor={scolor}/>} />
      <Route path='/' element={<Textform showalert={showalert} mode={navmode} />} />
     </Routes>
    </>
  )
}

export default App
