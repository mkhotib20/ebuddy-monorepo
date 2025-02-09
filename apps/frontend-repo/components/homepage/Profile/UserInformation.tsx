'use client';

import { type FormEventHandler } from 'react';

import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';

import userMutation from '@/apis/userMutation';
import useProfileState from '@/hooks/useProfileState';
import { finalizeUpdate, showAlert, toggleLoading, updateUser } from '@/store/feature/profileSlice';
import { useAppDispatch } from '@/store/hooks';

import AvatarSection from './AvatarSection';
import EditableUser from './EditableUser';
import FooterSection from './FooterSection';

// Use dynamic, because conditionally used
const AlertSection = dynamic(() => import('./AlertSection'));

const UserInformation = () => {
  const { profileName, userData, alert } = useProfileState();
  const dispatch = useAppDispatch();

  if (!userData?.id) return null;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    try {
      const newUserData = { name: profileName };
      dispatch(updateUser(newUserData));
      const { mutationError, mutationResponse } = await userMutation(newUserData);
      if (mutationError) {
        throw new Error(mutationError.message);
      }
      dispatch(finalizeUpdate(mutationResponse?.data || {}));
    } catch (error) {
      // handle error here
      const message = error instanceof Error ? error.message : 'Oops, something went wrong, please try again later';
      dispatch(showAlert({ message, severity: 'error' }));
    } finally {
      dispatch(toggleLoading());
    }
  };

  return (
    <Grid xs={12} md={4}>
      {<AlertSection />}
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <>
          <AvatarSection />
          <EditableUser />

          <Typography variant="body1" sx={{ mb: 1 }}>
            Email: {userData.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Last Updated At: {dayjs(userData.updatedAt).format('DD MMMM YYYY HH:mm')}
          </Typography>
          <FooterSection />
        </>
      </form>
    </Grid>
  );
};

export default UserInformation;
