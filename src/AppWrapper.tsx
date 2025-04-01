//create appwrapper sample compoment
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/Home';
import PageNotFound from './pages/404';
import WitnessDashboard from './modules/Witness/Dashboard';
import NotaryDashboard from './modules/Notary/Dashboard';
import AdminDashboard from './modules/Admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const AppWrapper: React.FC = () => {
  return (
    <Router>
        <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRole="witness" />}>
          <Route path="/witness" element={<WitnessDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRole="notary" />}>
          <Route path="/notary" element={<NotaryDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;