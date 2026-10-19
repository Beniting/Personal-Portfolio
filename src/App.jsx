import { useState, useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Qualifications from './components/Qualifications'
import Certifications from './components/Certifications'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  
  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
     <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
     <Hero />
     <About />
     <Projects />
     <Qualifications />
     <Certifications />
     <Contact />
    </div>
  )
}

export default App
