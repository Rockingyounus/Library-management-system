import { useState, useEffect, createContext, useContext } from "react"
//import { NotificationManager } from "react-notifications"
 import { BackendApi } from "../../client/backend-api";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import './test.css';


const UserContext = createContext({
    user: null,
    loginUser: () => { },
})

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(user && user.role === 'admin')
    }, [user])

     useEffect(() => {

      BackendApi.user.getProfile()
        .then(({ user, error }) => {
            if (error) {
                console.error(error)
            } else {
                setUser(user)
            }
        }).catch(console.error)
    }, [])

    // useEffect(() => {
    //     const fetchUserProfile = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:8080/v1/user/'); // Replace with your API endpoint
    //         const { data } = response;
            
    //         setUser(data.user);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    
    //     fetchUserProfile();
    //   }, []);
    

    const NotificationManager = () => {
        toast("errorddd");
    }
    
    const diffToast = () => {
        toast("Login Successfull");
    } 
    

    const loginUser = async (username, password) =>{
        
        const { user,error } = 
        await BackendApi.user.login(username,password)
         //axios.get("http://localhost:8080/v1/user",{
        //axios.get("http://localhost:8080/BackendApi.user.login(username,password)")
         //username,
         //password,
   //
        if (error) {
            NotificationManager()
        } else {
            diffToast()
            setUser(user)
        }
     }

  


    const logoutUser = async () => {
        setUser(null)
        await BackendApi.user.logout()
    }

    return (
        <>
        <UserContext.Provider value={{ user, loginUser, logoutUser, isAdmin }}>
            {children}
        </UserContext.Provider>
        <ToastContainer/>
        </>
    )
}

export { useUser, UserProvider }
 

// import { useState, useEffect, createContext, useContext } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BackendApi } from "../../client/backend-api";

// const UserContext = createContext({
//   user: null,
//   loginUser: () => {},
// });

// const useUser = () => useContext(UserContext);

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     setIsAdmin(user && user.role === "admin");
//   }, [user]);

//   const NotificationManager = (message) => {
//     toast.error(message);
//   };

//   const diffToast = (message) => {
//     toast.success(message);
//   };

//   const loginUser = async (username, password) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/v1/user/login",
//         { username, password },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       const { user, error } = response.data;

//       if (error) {
//         NotificationManager("Login failed. Please check your credentials.");
//       } else {
//         diffToast("Login Successful");
//         setUser(user);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       NotificationManager("An error occurred during login.");
//     }
//   };

//   const logoutUser = async () => {
//     setUser(null);
//     await BackendApi.user.logout();
//   };

//   // Fetch user profile on component mount
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/v1/user/profile");
//         const { user } = response.data;
//         setUser(user);
//       } catch (error) {
//         console.error("Fetch user profile error:", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   return (
//     <>
//       <UserContext.Provider value={{ user, loginUser, logoutUser, isAdmin }}>
//         {children}
//       </UserContext.Provider>
//       <ToastContainer />
//     </>
//   );
// };

// export { useUser, UserProvider };
