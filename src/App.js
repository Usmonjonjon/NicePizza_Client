import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Pitsa from './sahifalar/fayllar/pissa';
import Sushi from './sahifalar/fayllar/sushi';
import Napitka from './sahifalar/fayllar/napitka';
import Zakuska from './sahifalar/fayllar/zakuska';
import Kombo from './sahifalar/fayllar/kombo';
import Desert from './sahifalar/fayllar/desert';
import Souse from './sahifalar/fayllar/souse';
import Home from './sahifalar/Home/Home';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useInfoContext } from './context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Profile from './sahifalar/Profile/Profile';
import Orders from './sahifalar/Orders/Orders'
import EditProfile from './sahifalar/Profile/EditProfile';
import Order from './sahifalar/Order/Order';
import Layout from './components/Layout/Layout';




function App() {

  const {currentUser} = useInfoContext()
  const [isSignUp, setIsSignUp] = useState(false)
  const path = useLocation().pathname
  
  useEffect(() => {
    const rePath = () => {
      if(path === '/pissa' && !currentUser || path === '/sushi' && !currentUser || path === '/water' && !currentUser  || path === '/register' && !currentUser){
        setIsSignUp(true)
      } else {
        setIsSignUp(false)
      }
    }
    rePath()
  }, [path])

  return (
    <div className="App">
      {!isSignUp && <Header/>}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/register' element={<Register/>}/>
        <Route path='/pissa' element={!currentUser ? <Register reset={setIsSignUp}/> : <Pitsa/>}/>
        <Route path='/layout' element={!currentUser ? <Register reset={setIsSignUp}/> : <Layout/>}/>
        <Route path='/sushi' element={!currentUser ? <Register reset={setIsSignUp}/> : <Sushi/>}/>
        <Route path='/water' element={!currentUser ? <Register reset={setIsSignUp}/> : <Napitka/>}/>
        <Route path='/zakuska' element={!currentUser ? <Register reset={setIsSignUp}/> : <Zakuska/>}/>
        <Route path='/kombo' element={!currentUser ? <Register reset={setIsSignUp}/> : <Kombo/>}/>
        <Route path='/desert' element={!currentUser ? <Register reset={setIsSignUp}/> : <Desert/>}/>
        <Route path='/souse' element={!currentUser ? <Register reset={setIsSignUp}/> : <Souse/>}/>
        <Route path='/profile' element={!currentUser ? <Register reset={setIsSignUp}/> : <Profile/>}/>
        <Route path='/orders' element={!currentUser ? <Register reset={setIsSignUp}/> : <Orders/>}/>
        <Route path='/edit-profile' element={!currentUser ? <Register reset={setIsSignUp}/> : <EditProfile/>}/>
        <Route path='/order' element={!currentUser ? <Register reset={setIsSignUp}/> : <Order/>}/>
      </Routes>
      {!isSignUp && path !== '/chat' && <Footer/>}
      <ToastContainer/>
    </div>
  );
}


export default App;
