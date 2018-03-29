'use strict';

import mergeable from 'redux-merge-reducers';

const actions_types = [ 'RESET_STATE' ];

export const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'MAIN_' + string;
} );

export const initialState = {
    title: 'Main layout',
    error: ''
};

const mainReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( state, initialState );
        default:
            return state;
    }
};

export default mergeable( mainReducer );

