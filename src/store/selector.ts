import { createSelector } from 'reselect';
import { RootState } from './store';
import { User } from './authSlice';

// Selector to get witness users from the state
export const selectWitnessUsers = (state: RootState): User[] => state.auth.witnessUsers;
export const selectNotaryUsers = (state: RootState): User[] => state.auth.notaryUsers;
export const selectUserRole = (state: RootState): string | null => state.auth.userRole;
