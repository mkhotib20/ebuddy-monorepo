import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProfileAlert, ProfileState } from '@/models/profileState/types';
import { UserData } from '@/models/userData/types';

export const initialProfileState: ProfileState = {
  userData: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    toggleEditing: (state) => {
      state.editing = !state.editing;
    },
    toggleLoading: (state) => {
      state.savingData = !state.savingData;
    },
    showAlert: (state, action: PayloadAction<ProfileAlert>) => {
      state.alert = action.payload;
    },
    dismissAlert: (state) => {
      state.alert = undefined;
    },
    finalizeUpdate: (state, action: PayloadAction<Partial<UserData>>) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
      state.editing = false;
      state.alert = {
        severity: 'success',
        message: 'Success, data has been updated!',
      };
    },
    setProfileName: (state, action: PayloadAction<string>) => {
      state.profileName = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<UserData>>) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
      state.savingData = true;
      state.alert = {
        severity: 'info',
        message: 'Updating data...',
      };
    },
  },
});

export const { dismissAlert, showAlert, setProfileName, finalizeUpdate, toggleEditing, toggleLoading, updateUser } =
  profileSlice.actions;

export default profileSlice.reducer;
