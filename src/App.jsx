import Home from "./Home"
import styles from "./styles/App.module.css"
import  {Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import About from "./About"
import SignUp from "./SignUp"
import Features from "./Features"
import Login from "./Login"
import UserDashboard from "./UserDashboard"
function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true
    })
  })
  return(
    <>
<ToastContainer style={{zIndex: "100000"}}/>
     <div className={styles.pageWrapper}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
      </Routes>
     </div>
     </>
  )
}
export default App
