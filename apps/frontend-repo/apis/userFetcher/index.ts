'server only';

import { headers } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

import baseFetcher from '../baseFetcher/server';
import { UserDataResponse } from './types';

const userDataFetcher = async () => {
  const result = await baseFetcher<UserDataResponse>('/api/fetch-user-data');

  const headersData = await headers()
  const pathname = headersData.get('x-current-path');
  const isGuestRoute = pathname?.match(/^\/(login)/);
  const isLoggedIn = Boolean(result.data?.data?.id);

  if (isLoggedIn && isGuestRoute) {
    redirect('/', RedirectType.replace);
  }
  // if (!isLoggedIn && !isGuestRoute) {
  //   redirect('/login', RedirectType.replace);
  // }

  return {
    userData: result.data?.data,
    userError: result.error,
  };
};

export default userDataFetcher;
