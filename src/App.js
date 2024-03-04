import React from 'react';
import HomePage from './pages/HomePage';

import { Routes, Route } from 'react-router-dom';
import PaystackPayment from './components/Portfolio/API Website/PaystackPayment';

import LoginPage from './pages/Crud&Authentication/LoginPage';
import AdminDashboardPage from './pages/Crud&Authentication/AdminDashboardPage';
import UserDashboardPage from './pages/Crud&Authentication/UserDashboardPage';
import PrivateRoute from './components/Portfolio/Crud/Authentication/Routes/PrivateRoute';
import SignupPage from './components/Portfolio/Crud/Authentication/Signup';
import ApiApp from './pages/ConnectToApi/ApiApp';
import MyWorks from './pages/myWorks';

const App = () => {
  return (
    // <AuthProvider>
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/updates" element={<ApiApp />} />
        <Route path="/myWorks" element={<MyWorks />} />
        <Route
          path="/user-dashboard/payment"
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
