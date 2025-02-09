export interface UserDataResponse {
  data?: RemoteUserData;
}

export interface RemoteUserData {
  name: string;
  id: string;
  email: string;
  picture: string;
  updatedAt: string;
}
