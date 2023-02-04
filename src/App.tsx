import './App.css'
import Header from './assets/components/Header'
import Home from './assets/components/Home/Home'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
/*   const Introduction = () => {
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }); */

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default App
