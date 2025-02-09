export interface Post {
  pictureUrl: string;
  id?: string;
  name?: string;
  authorEmail?: string;
  timestamp: string;
  text: string;
}

export interface SocialState {
  posts: Post[];
  submitingPost?: boolean;
  page: number;
  hasNext: boolean;
  fetchingData?: boolean;
}
