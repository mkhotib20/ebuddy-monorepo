'use client';

import { ChangeEventHandler } from 'react';

import { TextField, Typography } from '@mui/material';

import useProfileState from '@/hooks/useProfileState';
import { setProfileName } from '@/store/feature/profileSlice';
import { useAppDispatch } from '@/store/hooks';

const EditableUser = () => {
  const dispatch = useAppDispatch();
  const { profileName, userData, editing } = useProfileState();

  if (!editing) {
    return (
      <Typography variant="h5" sx={{ mb: 2 }}>
        {userData.name}
      </Typography>
    );
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setProfileName(event.currentTarget.value));
  };

  return (
    <TextField
      variant="standard"
      autoFocus
      label="Name"
      value={profileName}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
  );
};

export default EditableUser;
