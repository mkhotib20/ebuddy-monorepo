import { useAppSelector } from '@/store/hooks';

// Simplify get user data selector
const useSocialState = () => {
  return useAppSelector((state) => state.social);
};

export default useSocialState;
