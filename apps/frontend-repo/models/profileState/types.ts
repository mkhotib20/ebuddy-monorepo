import { AlertColor } from '@mui/material';

import { UserData } from '../userData/types';

export interface ProfileAlert {
  message: string;
  severity?: AlertColor;
}

export interface ProfileState {
  editing?: boolean;
  savingData?: boolean;
  profileName?: string;
  userData: Partial<UserData>;
  alert?: ProfileAlert;
}
