'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { INITIAL_DEFAULT_STORE, makeStore } from '../store';
import type { AppStorage } from '../types';

interface UserDataProviderProps {
  initialStore?: AppStorage;
}

const StoreProvider = ({ children, initialStore }: PropsWithChildren<UserDataProviderProps>) => {
  return <Provider store={makeStore(initialStore || INITIAL_DEFAULT_STORE)}>{children}</Provider>;
};

export default StoreProvider;
