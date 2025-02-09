import { PropsWithChildren } from 'react';

import { Box, Container } from '@mui/material';

import Header from '@/components/Header';
import ProtectedLayout from '@/components/ProtectedLayout';

const PageLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      <ProtectedLayout>
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{children}</Box>
        </Container>
      </ProtectedLayout>
    </>
  );
};

export default PageLayout;
