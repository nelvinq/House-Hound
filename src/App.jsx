import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import * as propertySalesData from "./services/propertySalesData"
import * as getToken from "./services/getToken"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import PropertySearchBar from './components/PropertySearchBar'
import PropertySearchPage from './components/PropertySearchPage'
import PropertyDetails from './components/PropertyDetails'


function App() {
  const [properties, setProperties] = useState([]);
  const [token, setToken] = useState("")
  const [propertyDetails, setPropertyDetails] = useState([]);

  useEffect(()=>{
    if (token === "") {
    const fetchToken = async()=> {
      try {
        const data = await getToken.getToken();
    setToken(data);
    console.log("Updated token:", token);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    fetchToken();
  }},[]);

  useEffect(()=>{
    if (token !== "") {
    const fetchData = async()=> {
      try {
        const data = await propertySalesData.propertySalesData(token);
    setProperties(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    fetchData();
  }
  },[token]);

  useEffect(() => {
    console.log("Updated properties:", properties);
  }, [properties]);

  useEffect(() => {
    console.log("Updated token:", token);
  }, [token]);

  useEffect(() => {
    console.log("Updated property details:", propertyDetails);
  }, [propertyDetails]);

  const handleDetails = async (project, street) => {
    try {
      const filteredDetails = properties.filter(
        (property) => property.project === project && property.street === street
      );
      setPropertyDetails(filteredDetails);
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };

  return (
    <>
    <NavBar />
    <PropertyDetails propertyDetails={propertyDetails} />
    <PropertySearchPage properties={properties} handleDetails={handleDetails}/>
    <Footer />
    </>
  )
};

export default App
