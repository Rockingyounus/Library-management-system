<<<<<<< HEAD
import React from "react";
import { BrowserRouter as  Router, } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
 

const App =()=> {
 return (
 
   <div>
     <Router>
        <Layout/>
     </Router> 
   </div>
     
  
  
  );
 }


export default App;





=======
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "@mui/material"
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"
import { UserProvider } from "./context/user-context"
import { Suspense } from 'react';

export const App = () => {
  const [data, setData] = useState("");

  const submit = async () => {
    const response = await axios.get("http://localhost:4000/v1/book");
    console.log(response.data);
    setData(response.data);
  }
  useEffect(() => {
    submit()
  }, [])
  return (
    <UserProvider>
      <Suspense fallback={null}>
        <Container className="page-container">
          <Router>
            <AppLayout />
            <div>{data}
            </div>
            <NotificationContainer />
          </Router>
        </Container>
      </Suspense>
    </UserProvider>
  )
}
>>>>>>> 41a4acd3456f5a6d0d38df2a26cf81d2d094d962
