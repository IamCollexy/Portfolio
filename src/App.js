import React from 'react';
import HomePage from './pages/HomePage';
import Portfolio from './pages/ConnectToApi/Entertainment';
import { Routes, Route } from 'react-router-dom';
import PaystackPayment from './components/Portfolio/API Website/PaystackPayment';

import AuthProvider from './utils/AuthProvider';

import LoginPage from './pages/Crud&Authentication/LoginPage';
import AdminDashboardPage from './pages/Crud&Authentication/AdminDashboardPage';
import UserDashboardPage from './pages/Crud&Authentication/UserDashboardPage';
import PrivateRoute from './components/Portfolio/Crud/Authentication/Routes/PrivateRoute';
import SignupPage from './components/Portfolio/Crud/Authentication/Signup';

const App = () => {
  return (
    // <AuthProvider>
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/payment"
          element={<PaystackPayment />}
        />
        <Route path="/crudApp-login" element={<LoginPage />} />
        <Route path="/crudApp-signup" element={<SignupPage />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <PrivateRoute>
              <UserDashboardPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {/* </AuthProvider> */}
    </>
  );
};

export default App;
