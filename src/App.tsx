import React from 'react';
import AppWrapper from './AppWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from './store/selector';
import { setUserRole } from './store/authSlice';

const App: React.FC = () => {
  const userRole = useSelector(selectUserRole);
  const dispatch = useDispatch();
  if (!userRole) {
    return <div>
      {userRole}
      <input type="text" placeholder="Enter your role" />
      <button onClick={() => {
        const role = (document.querySelector('input') as HTMLInputElement).value;
        if (!role) {
          alert('Please enter a role');
          return;
        }
        if (role !== 'witness' && role !== 'notary' && role !== 'admin') {
          alert('Invalid role. Please enter witness, notary, or admin.');
          return;
        }
        dispatch(setUserRole(role));
        // Logic to set the user role in the Redux store
      }
      }>Set Role</button>
      <p>Please enter your role to access the application.</p>
      <p>Available roles: witness, notary, admin</p>
    </div>
  }
  return (
    <AppWrapper />    
  );
};

export default App;
