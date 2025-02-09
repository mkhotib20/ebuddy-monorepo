import { useAppSelector } from '@/store/hooks';

// Simplify get user data selector
const useProfileState = () => {
  return useAppSelector((state) => state.profile);
};

export default useProfileState;
