import { Typography } from '@mui/material';
import Image from 'next/image';

const BrandIdentity = () => {
  return (
    <>
      <Image src="/logoipsum.svg" width={200} height={50} alt="Logo Ipsum" style={{ marginBottom: 32 }} />
      <Typography variant="h3" gutterBottom>
        Welcome Back!
      </Typography>
      <Typography align="center" variant="body1">
        Please login to your account with provided methods
      </Typography>
    </>
  );
};

export default BrandIdentity;
