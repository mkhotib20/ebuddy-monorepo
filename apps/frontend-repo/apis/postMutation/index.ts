import { Post } from '@/models/post/types';

import clientBaseFetcher from '../baseFetcher/client';
import { UserDataResponse } from '../userFetcher/types';

const postMutation = async (postData: Partial<Post>) => {
  const { data, error } = await clientBaseFetcher<UserDataResponse>('/api/insert-post', {
    jsonData: postData,
    method: 'POST',
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

export default postMutation;
