import { useState, useEffect } from "react";
import React from "react";
import { Booklist } from "../Bookslist/Bookslist";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginDialog } from "../login/login-dialog";
import { useUser } from "../context/user-context";
import { useNavigate } from "react-router-dom";

function Layout() {
  const [openLogin, setopenLogin] = useState(false);
  //const [openLogout, setopenLogout] = useState(false);
  //let inputRef=useRef(null);
  const { user, loginUser, logoutUser, isAdmin } = useUser();
  const navigate = useNavigate();

  

  const handleLoginSubmit = (username, password) => {
    loginUser(username, password)
    setopenLogin(false);
  };

  const handleLoginClose = () => {
    setopenLogin(false);
  };

   const handleLogout = () => {
     logoutUser();
  //   //handleCloseUserMenu()
   };

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else if (isAdmin) {
      navigate("/admin/books/add")
    }
  }, [user, isAdmin]);

  // render() {
  //   const { isLoggedIn } = this.state;
  // }
  return (
    <div>
      <nav className="bg-blue-500 py-4 px-1 mx-24 ">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">
            Library Management System
          </h1>

          {user ? (
            <>
            <button onClick={this.handleLogout}>Logout</button>
           
            </>
          ) : (

          <button
            onClick={() => setopenLogin(true) }
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          )}
          
          {/* {openLogin && <LoginDialog/> } */}
          {openLogin && (
            <LoginDialog
              open={openLogin}
              handleSubmit={handleLoginSubmit}
              handleClose={handleLoginClose}
            />
          )}
        </div>
      </nav>

      {
        <Routes>
          <Route path="/books" exact element={<Booklist />} />
          <Route path="*" element={<Navigate to="/books" replace />} />
        </Routes>
      }
    </div>
  );
}



export default Layout;
