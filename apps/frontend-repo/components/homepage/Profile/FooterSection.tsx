import { MouseEventHandler } from 'react';

import { EditOutlined, SaveOutlined } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';

import useProfileState from '@/hooks/useProfileState';
import { toggleEditing } from '@/store/feature/profileSlice';
import { useAppDispatch } from '@/store/hooks';

const FooterSection = () => {
  const { editing, savingData } = useProfileState();
  const dispatch = useAppDispatch();

  const handleEditClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    dispatch(toggleEditing());
  };

  if (!editing) {
    return (
      <Button type="button" style={{ width: 200, maxWidth: '100%' }} variant="outlined" onClick={handleEditClick}>
        <EditOutlined />
      </Button>
    );
  }

  return (
    <Button
      style={{ width: 200, maxWidth: '100%' }}
      disabled={savingData}
      variant="contained"
      color="primary"
      type="submit"
    >
      {savingData ? <CircularProgress color="inherit" size="24px" /> : <SaveOutlined />}
    </Button>
  );
};

export default FooterSection;
