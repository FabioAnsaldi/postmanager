'use strict';

import React, { Component } from 'react';
import { Text, Content, List, ListItem, Left, Right, Icon } from 'native-base';
import { connect } from 'react-redux';

import Theme from '../../../Theme';

class Menu extends Component {

    renderProfileLink() {
        return (
            <ListItem onPress={() => this.props.navigation.navigate( 'Profile' )}>
                <Left>
                    <Icon style={Theme.menu.icon} name="person"/>
                    <Text style={Theme.menu.text}>Profile</Text>
                </Left>
                <Right>
                    <Icon style={Theme.menu.icon} name="arrow-forward"/>
                </Right>
            </ListItem>
        );
    }

    render() {
        return (
            <Content style={{ backgroundColor: '#EFEFEF' }}>
                <List>
                    <ListItem onPress={() => this.props.navigation.navigate( 'Home' )}>
                        <Left>
                            <Icon style={Theme.menu.icon} name="home"/>
                            <Text style={Theme.menu.text}>Home</Text>
                        </Left>
                        <Right>
                            <Icon style={Theme.menu.icon} name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    {this.props.loginReducer.userdata ? this.renderProfileLink() : null}
                    <ListItem onPress={() => this.props.navigation.navigate( 'Settings' )}>
                        <Left>
                            <Icon style={Theme.menu.icon} name="ios-settings"/>
                            <Text style={Theme.menu.text}>Settings</Text>
                        </Left>
                        <Right>
                            <Icon style={Theme.menu.icon} name="arrow-forward"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        menuReducer: state.menuReducer,
        loginReducer: state.loginReducer,
    };
};

export default connect( mapStateToProps )( Menu );
