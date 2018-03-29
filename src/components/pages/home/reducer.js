'use strict';

const actions_types = [ 'RESET_STATE' ];

export const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'HOME_' + string;
} );

export const initialState = {
    title: 'Home page'
};

const homeReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( state, initialState );
        default:
            return state;
    }
};

export default homeReducer;
