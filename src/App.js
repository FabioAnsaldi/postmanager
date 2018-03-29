'use strict';

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';

import mainReducer from './components/layouts/main/reducer';
import homeReducer from './components/pages/home/reducer';
import profileReducer from './components/pages/profile/reducer';
import settingsReducer from './components/pages/settings/reducer';
import menuReducer from './components/widgets/menu/reducer';
import loginReducer from './components/widgets/login/reducer';

import Home from './components/pages/home/index';
import Profile from './components/pages/profile/index';
import Settings from './components/pages/settings/index';

const reducer = combineReducers( {
    homeReducer: mainReducer.merge( homeReducer ),
    profileReducer: mainReducer.merge( profileReducer ),
    settingsReducer: mainReducer.merge( settingsReducer ),
    menuReducer,
    loginReducer
} );
const store = createStore( reducer );

const AppNavigator = StackNavigator( {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Settings: { screen: Settings }
}, {
    initialRouteName: 'Home',
    navigationOptions: { header: null }
} );

type Props = {};

export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <AppNavigator/>
                </Root>
            </Provider>
        );
    }
}
