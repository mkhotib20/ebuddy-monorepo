import { configureStore } from '@reduxjs/toolkit';

import profileReducer, { initialProfileState } from './feature/profileSlice';
import type { AppStorage } from './types';

export const INITIAL_DEFAULT_STORE: AppStorage = {
  profile: initialProfileState,
};

export const makeStore = (initialUserData: AppStorage) => {
  return configureStore({
    preloadedState: initialUserData,
    reducer: {
      profile: profileReducer,
    },
  });
};

export const store = makeStore(INITIAL_DEFAULT_STORE);

export type AppStore = ReturnType<typeof makeStore>