'use strict';

import { initialState, TYPES } from './reducer';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};
