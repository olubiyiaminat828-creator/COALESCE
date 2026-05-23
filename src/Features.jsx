import { useEffect } from "react"
import Navbar from "./components/Navbar"
export default function Features(){
    useEffect(() => {
        document.title = "Features | page"
    }, [])
    return(
        <>
        <Navbar/>
        </>
    )
}