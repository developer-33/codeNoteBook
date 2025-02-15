import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import CodeNotebookApp from './CodeNotebookApp';
import ProfilePage from './Profile/ProfilePage';
import Cars from './Cars';
import FriendsPage from './Profile/Friends';
import ForgotPassword from './auth/ForgotPassword';
import MessagePage from './messages/MessagePage';
import SignUpForm from './auth/Register';

  // import Login from "./auth/Login";
  // import ProtectedRoute from './auth/ProtectedRoutes';

const Mainsection = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}

        {/* Protect these routes */}
        {/* <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} > */}
          <Route path="/notebook" element={<CodeNotebookApp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/messages" element={<MessagePage />} />
          <Route path="/register" element={<SignUpForm />} />
      
          <Route path="/friends" element={<FriendsPage  />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default Mainsection;
