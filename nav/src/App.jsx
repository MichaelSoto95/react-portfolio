import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Loader from './assets/Loader'
import LogoLoader from './assets/logoLoader'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [loading, Setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      Setloading(false);
    }, 1000);
  }, []);

  return (
    <>

      <NavBar />
      {loading ? <LogoLoader /> : <div>

        <Main />
      </div>}
      <Footer />
    </>
  )
}

export default App
