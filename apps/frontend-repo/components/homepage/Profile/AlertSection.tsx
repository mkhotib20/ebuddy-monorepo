import { useEffect } from 'react';

import { Alert, Typography } from '@mui/material';

import useProfileState from '@/hooks/useProfileState';
import { dismissAlert } from '@/store/feature/profileSlice';
import { useAppDispatch } from '@/store/hooks';

const AlertSection = () => {
  const { alert } = useProfileState();
  const dispatch = useAppDispatch();

  // Clear alert after 2s
  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      dispatch(dismissAlert());
    }, 2 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert, dispatch]);

  if (!alert) {
    return null;
  }

  return (
    <div style={{ marginTop: 32 }}>
      <Alert severity={alert.severity}>
        <Typography>{alert.message}</Typography>
      </Alert>
    </div>
  );
};

export default AlertSection;
