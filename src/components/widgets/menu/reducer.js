'use strict';

const actions_types = [ 'RESET_STATE' ];

export const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'MENU_' + string;
} );

export const initialState = {
    title: 'Menu',
    error: ''
};

const menuReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( state, initialState );
        default:
            return state;
    }
};

export default menuReducer;
