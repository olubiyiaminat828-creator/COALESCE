import { useEffect } from "react";
import Navbar from "./components/Navbar";
export default function About(){
    useEffect(() => {
        document.title = "About us | page"
    })
   return (
    <>
    <Navbar/>
    </>
   )
}