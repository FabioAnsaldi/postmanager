'use strict';

import { initialState, TYPES } from './reducer';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const userLogin = ( input ) => {
    return {
        type: TYPES.USER_LOGIN,
        userdata: input
    };
};

export const userLogout = ( input ) => {
    return {
        type: TYPES.USER_LOGOUT,
        userdata: input
    };
};

export const setFBLoginManager = ( input ) => {
    return {
        type: TYPES.USER_FBLOGINMANAGER,
        FBLoginManager: input
    };
};

export const errorLogin = ( input ) => {
    return {
        type: TYPES.ERROR_LOGIN,
        error: input
    };
};
