import{ UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.Set_CURRENT_USER,
    payload:user
});