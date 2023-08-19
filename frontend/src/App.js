import React, {useEffect, useState } from 'react'
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom"
import {  Container } from "@mui/material"
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"
import { UserProvider } from "./context/user-context"
import { Suspense } from 'react';

export const App = () => { 
       const [data,setData]=useState("");

        const submit =  async() => { 
        
        const response=await axios.post("http://localhost:8080");
        setData(response.data);
        }

        useEffect(()=>{
          submit()
        },[])
         
  
    
  

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
  