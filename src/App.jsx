import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import * as propertySalesData from "./services/propertySalesData";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import PropertySearchBar from './components/PropertySearchBar'
import PropertySearchPage from './components/PropertySearchPage'
import PropertyDetails from './components/PropertyDetails'

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    const fetchData = async()=> {
      try {
        const data = await propertySalesData.propertySalesData();
        if (data.error) {
          throw new Error(data.error);
        }
    setProperties(properties);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    fetchData();
  },[]);


  return (
    <>
    <NavBar />
    <h1>Hello World</h1>
    <Footer />
    </>
  )
};

export default App
