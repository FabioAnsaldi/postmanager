'use strict';

const actions_types = [ 'RESET_STATE', 'USER_LOGIN', 'USER_LOGOUT', 'USER_FBLOGINMANAGER', 'ERROR_LOGIN' ];

export const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'LOGIN_' + string;
} );

export const initialState = {
    title: 'Login widget',
    error: '',
    userdata: null,
    FBLoginManager: null
};

const loginReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( state, initialState );
        case TYPES.USER_LOGIN:
            return Object.assign( state, { 'userdata': action.userdata } );
        case TYPES.USER_LOGOUT:
            return Object.assign( state, { 'userdata': action.userdata } );
        case TYPES.USER_FBLOGINMANAGER:
            return Object.assign( state, { 'FBLoginManager': action.FBLoginManager } );
        case TYPES.ERROR_LOGIN:
            return Object.assign( state, { 'error': action.error } );
        default:
            return state;
    }
};

export default loginReducer;
