import React from 'react';
import { Booklist } from '../Bookslist/Bookslist';
import { Routes,Route,Navigate } from "react-router-dom"

function Layout() {
  return (
  <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Library management System
        </div> 
        <div className="text-white font-bold">
          <span className="mr-2">Login</span>
        </div>
      </div>
    </nav>
    { <Routes>
      <Route path="/books" exact element={<Booklist />}/>
      <Route path="*" element={<Navigate to="/books" replace/>}/>
    </Routes> }
  </>
  );
}
 
export default Layout;
