import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWorks"
import { useEffect } from "react"
function Home(){
    useEffect(() => {
       document.title = "Home | page"
    }, [])
    return(
        <>
        <Navbar/>
        <Header/>
        <Features/>
        <HowItWorks/>
        <Footer/>
        </>
    )
}
export default Home