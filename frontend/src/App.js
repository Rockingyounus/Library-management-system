 // import React, { useEffect, useState } from 'react'
// import axios from "axios";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./Components/context/user-context";

const App = () => {
  // const [data, setData] = useState("");

  // const submit = async () => {
  //   const response = await axios.get("http://localhost:4000/v1/book");
  //   console.log(response.data);
  //   setData(response.data);
  // }
  // useEffect(() => {
  //   submit()
  // }, [])
  return (
     
      <UserProvider>
      <Router>
        <Layout />
        {/* <ToastContainer/> */}
      </Router>
      </UserProvider>
     
  );
};

export default App;
