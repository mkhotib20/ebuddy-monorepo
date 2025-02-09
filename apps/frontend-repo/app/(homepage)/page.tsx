import { Grid } from '@mui/material';

import UserInformation from '@/components/homepage/Profile/UserInformation';

const HomePage = async () => {

  return (
    <Grid justifyContent="center" container spacing={2}>
      <UserInformation />
    </Grid>
  );
};

export default HomePage;
