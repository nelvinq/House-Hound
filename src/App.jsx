import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PropertySearchBar from './components/PropertySearchBar'
import PropertySearchPage from './components/PropertySearchPage'
import PropertyDetails from './components/PropertyDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}

export default App
