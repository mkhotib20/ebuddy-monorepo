import { UserData } from '@/models/userData/types';

import clientBaseFetcher from '../baseFetcher/client';
import { UserDataResponse } from '../userFetcher/types';

const userMutation = async (userData: Partial<UserData>) => {
  const { data, error } = await clientBaseFetcher<UserDataResponse>('/api/update-user-data', {
    jsonData: userData,
    method: 'PATCH',
  });
  if (error) {
    return {
      mutationError: error,
    };
  }

  return {
    mutationResponse: data,
  };
};

export default userMutation;
