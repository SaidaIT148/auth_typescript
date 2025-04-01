import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define user roles
type Role = 'witness' | 'notary' | 'admin' | null;

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

interface AuthState {
  userRole: Role;
  witnessUsers: User[];
  notaryUsers: User[];
}

const initialState: AuthState = {
  userRole: null,
  witnessUsers: [
    { id: 1, name: 'Alice Witness', email: 'alice@example.com', role: 'witness' },
    { id: 2, name: 'Bob Witness', email: 'bob@example.com', role: 'witness' },
  ],
  notaryUsers: [
    { id: 3, name: 'Charlie Notary', email: 'charlie@example.com', role: 'notary' },
    { id: 4, name: 'David Notary', email: 'david@example.com', role: 'notary' },
  ],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<Role>) => {
      state.userRole = action.payload;
    },
    logout: (state) => {
      state.userRole = null;
    },
    addWitnessUser: (state, action: PayloadAction<User>) => {
      state.witnessUsers.push(action.payload);
    },
    addNotaryUser: (state, action: PayloadAction<User>) => {
      state.notaryUsers.push(action.payload);
    },
  },
});

// Export actions
export const { setUserRole, logout, addWitnessUser, addNotaryUser } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
