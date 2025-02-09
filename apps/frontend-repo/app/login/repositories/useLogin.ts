import { useCallback, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import firebaseConfig from '@/config/firebaseConfig';

initializeApp(firebaseConfig);

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const loginUser = useCallback(async () => {
    try {
      setLoading(true);
      const auth = getAuth();

      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();
      window.location.href = `/api/auth/login?idToken=${idToken}`;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loginUser, loading };
};

export default useLogin;
