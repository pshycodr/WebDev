import { useState } from 'react'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar/>
      <Home/>
    </>
  },
  {
    path: '/about',
    element: <>
      <Navbar/>
      <About/>
    </>
  },
  {
    path: '/contact',
    element: <>
      <Navbar/>
      <Contact/>
    </>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
