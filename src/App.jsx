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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

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
        const indexedData = data.map() // add in ID for property here to use for routing
    setProperties(data);
    setFilteredProperties(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    fetchData();
  }
  },[token]);

  const handleDetails = async (project, street) => {
    try {
      const selectedDetails = properties.filter(
        (property) => property.project === project && property.street === street
      );
      setPropertyDetails(selectedDetails);
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter(
          (property) =>
            property.project.toLowerCase().includes(query.toLowerCase()) ||
            property.street.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

// Console.log for checking - to remove
  useEffect(() => {
    console.log("Updated properties:", properties);
  }, [properties]);

  useEffect(() => {
    console.log("Updated properties:", filteredProperties);
  }, [filteredProperties]);

  useEffect(() => {
    console.log("Updated token:", token);
  }, [token]);

  useEffect(() => {
    console.log("Updated property details:", propertyDetails);
  }, [propertyDetails]);

  return (
    <>
    <NavBar />
    <PropertyDetails propertyDetails={propertyDetails} />
    <PropertySearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
    <PropertySearchPage filteredProperties={filteredProperties} handleDetails={handleDetails}/>
    <Footer />
    </>
  )
};

export default App
