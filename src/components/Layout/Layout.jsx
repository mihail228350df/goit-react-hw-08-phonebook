import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { GlobalStyle } from 'components/StyledComponent';

export const Layout = () => {
  return (
    <Box maxWidth={1440} margin="0 auto" px={16}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};