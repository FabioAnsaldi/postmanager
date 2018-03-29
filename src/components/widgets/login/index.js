import React, { Component } from 'react';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as action from './action';

class Login extends Component {

    render() {
        return (
            <FBLogin
                ref={( fbLogin ) => {
                    this.fbLogin = fbLogin
                }}
                loginBehavior={FBLoginManager.LoginBehaviors.Native}
                permissions={[ "public_profile", "email", "user_friends", "user_status" ]}
                onLogin={( userData ) => {
                    __DEV__ ? console.log( "onLogin => ", userData ) : null;
                    try {
                        AsyncStorage.setItem( 'USER_DATA', JSON.stringify( userData.profile ) ).then( ( o ) => {
                            this.props.dispatch( action.userLogin( userData ) );
                            this.props.dispatch( action.setFBLoginManager( FBLoginManager ) );
                            this.props.navigation.navigate( 'Home' );
                        } ).catch( ( e ) => {
                            __DEV__ ? console.error( 'AsyncStorage Promise error:', e ) : null;
                        } );
                    } catch ( error ) {
                        __DEV__ ? console.error( 'AsyncStorage error: ' + error.message ) : null;
                    }
                }}
                onLoginFound={( userProfile ) => {
                    __DEV__ ? console.log( "onLoginFound => ", userProfile ) : null;
                    try {
                        AsyncStorage.getItem( 'USER_DATA' ).then( ( o ) => {
                            let userData = Object.assign( userProfile, { profile: JSON.parse( o ) } );
                            this.props.dispatch( action.userLogin( userData ) );
                            this.props.dispatch( action.setFBLoginManager( FBLoginManager ) );
                            this.props.navigation.navigate( 'Home' );
                        } ).catch( ( e ) => {
                            __DEV__ ? console.error( 'AsyncStorage Promise error:', e ) : null;
                        } );
                    } catch ( error ) {
                        __DEV__ ? console.error( 'AsyncStorage error: ' + error.message ) : null;
                    }
                }}
                onLoginNotFound={( status ) => {
                    __DEV__ ? console.log( "onLoginNotFound => ", status ) : null;
                }}
                onLogout={( out ) => {
                    __DEV__ ? console.log( "onLogout => ", out ) : null;
                }}
                onCancel={( e ) => {
                    __DEV__ ? console.log( "onCancel => ", e ) : null;
                }}
                onPermissionsMissing={( e ) => {
                    __DEV__ ? console.log( "onPermissionsMissing => ", e ) : null;
                }}
            />
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        loginReducer: state.loginReducer
    };
};

export default connect( mapStateToProps )( Login );
