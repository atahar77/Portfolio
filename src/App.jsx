import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    }
  ])

  return (
   <div>
    
    <RouterProvider router={router} />
   </div>
  )
}

export default App
