import { useDispatch, useSelector, useStore } from 'react-redux';

import { AppStore } from './store';
import type { AppDispatch, AppStorage } from './types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppStorage>();
export const useAppStore = useStore.withTypes<AppStore>();
