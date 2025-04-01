import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUserRole } from '../store/selector';

const Home: React.FC = () => {
    const userRole = useSelector(selectUserRole)
  return (
    <div>
        <h1>{userRole}</h1>
        <h1>Home Page</h1>
        <p>Welcome to our app!</p>
        <Link to="/admin">Admin</Link><br />
        <Link to="/notary">Notary</Link><br />
        <Link to="/witness">Witness</Link>
    </div>
  );
};

export default Home;
