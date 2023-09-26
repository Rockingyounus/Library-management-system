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
        axios.get("http://localhost:8080/v1/user")
      //axios.get("http://localhost:8080/v1/BackendApi.user.getProfile()")
        .then(({ user, error }) => {
            if (error) {
                console.error(error)
            } else {
                setUser(user)
            }
        }).catch(console.error)
    }, [])

    const NotificationManager = () => {
        toast("errorddd");
    }
    
    const diffToast = () => {
        toast("Login Successfull");
    } 
    

    // const loginUser = async (username, password) =>{
        
    //     const { user,error } = 
    //      axios.post("http://localhost:8080/v1/user")
    //     //axios.get("http://localhost:8080/BackendApi.user.login(username,password)")
    //      username,
    //      password,
    //     if (error) {
    //         NotificationManager()
    //     } else {
    //         diffToast()
    //         setUser(user)
    //     }
    //  }

    const loginUser = async (username, password) => {
    try {
        const response = await axios.get("http://localhost:8080/v1/user", {
            username,
            password,
        });

        if (response.status === 200) {
            const { user, error } = response.data;
            if (error) {
                NotificationManager();
            } else {
                diffToast();
                setUser(user);
            }
        } else {
            NotificationManager();
        }
    } catch (error) {
        console.error('An error occurred:', error);
        NotificationManager('An error occurred while logging in');
    }
};


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

 // const loginUser = async (username, password) => {
    //     try{
    //         // Make an HTTP GET request to the login endpoint
    //         const response = await axios.get("http://localhost:8080/v1/BackendApi.user.login?username=${username}&password=${password}");
            
    //         // Check the response status code or other conditions to determine if the login was successful
    //         if (response.status === 200) {
    //             // If successful, set the user data (assuming the user data is in the response)
    //             const user = response.data; // You may need to adjust this based on your API response structure
    //             setUser(user);
    
    //             // Show a success toast notification
    //             diffToast();
    //         } else {
    //             // If not successful, handle the error (show an error message or perform other actions)
    //              // Assuming your API returns an error message
    //             NotificationManager();
    //         }
    //     } catch (error) {
    //         // Handle any network or other errors that occurred during the request
    //         console.error('An error occurred:', error);
    //         NotificationManager('An error occurred while logging in');
    //     }
    // }