import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Link } from 'react-router-dom';
import './UsersList.css'; // Optional: For styling

const UsersList: React.FC = () => {
  const witnessUsers = useSelector((state: RootState) => state.auth.witnessUsers);
  const notaryUsers = useSelector((state: RootState) => state.auth.notaryUsers);

  return (
    <div>
      <h1>Users List</h1>

      <div className="user-cards">
        {/* Witness Users Card */}
        <div className="user-card">
          <h2>Witness Users</h2>
          <ul>
            {witnessUsers.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>

        {/* Notary Users Card */}
        <div className="user-card">
          <h2>Notary Users</h2>
          <ul>
            {notaryUsers.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/admin">Back to Admin Dashboard</Link>
    </div>
  );
};

export default UsersList;
