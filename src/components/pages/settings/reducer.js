'use strict';

const actions_types = [ 'RESET_STATE' ];

export const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'SETTINGS_' + string;
} );

export const initialState = {
    title: 'Settings page'
};

const settingsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( state, initialState );
        default:
            return state;
    }
};

export default settingsReducer;
