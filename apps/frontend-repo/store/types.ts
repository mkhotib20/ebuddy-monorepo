import { ProfileState } from '@/models/profileState/types';

import { store } from './store';

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface AppStorage {
  profile: ProfileState;
}
