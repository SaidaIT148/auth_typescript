import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage users:</p>

      {/* Link to the Users List Page */}
      <Link to="/admin/users-list">View Users List</Link>
    </div>
  );
};

export default AdminDashboard;
