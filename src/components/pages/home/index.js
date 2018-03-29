'use strict';

import React from 'react';
import { Container, Content, List, ListItem, View, Text } from 'native-base';
import { connect } from 'react-redux';

import Theme from '../../../Theme';
import Main, { mainReducer } from '../../layouts/main/index';
import Login from '../../widgets/login/index';

class Home extends Main {

    renderWelcome() {
        return (
            <List>
                <ListItem itemHeader first>
                    <Text style={Theme.cta.title}>Home</Text>
                </ListItem>
                <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                    <View>
                        <Text style={Theme.text.big}>Welcome into the application!</Text>
                        <Text style={Theme.text.normal}>Manage your facebook posts and enjoy with it</Text>
                    </View>
                </ListItem>
                <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                    <View>
                        <Text style={Theme.text.normal}>If you want to use this application and manage all of your post so you need to sign in into your
                            personal facebook account.</Text>
                    </View>
                </ListItem>
            </List>
        );
    }

    renderLoginButton() {
        return (
            <Content style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <Login navigation={this.props.navigation} style={{ color: Theme.color.darkgray, fontSize: Theme.font.normal }}/>
            </Content>
        );
    }

    renderContent() {
        return (
            <Container style={{ backgroundColor: Theme.color.white }}>
                {!this.props.loginReducer.userdata ? this.renderWelcome() : null}
                {!this.props.loginReducer.userdata ? this.renderLoginButton() : null}
            </Container>
        );
    }
}

const mapStateToProps = ( state ) => {
    console.log( "state ==>", state.homeReducer );
    console.log( "state ==>", state.loginReducer );
    return {
        homeReducer: state.homeReducer,
        loginReducer: state.loginReducer
    };
};

export default connect( mapStateToProps )( Home );
