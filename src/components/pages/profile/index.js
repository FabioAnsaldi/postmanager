'use strict';

import React from 'react';
import { Container, Icon, List, ListItem, Left, Body, Thumbnail, Button, View, Text } from 'native-base';
import { connect } from 'react-redux';

import Theme from '../../../Theme';
import Main from '../../layouts/main/index';

class Profile extends Main {

    renderHeader() {
        return null;
    }

    renderContent() {
        return (
            <Container style={{ backgroundColor: Theme.color.white }}>
                <List>
                    <ListItem onPress={() => this.props.navigation.navigate( 'Home' )}>
                        <Left>
                            <Icon style={Theme.cta.icon} name="arrow-back"/>
                            <Body>
                            <Text style={Theme.cta.text}>Profile</Text>
                            </Body>
                        </Left>
                    </ListItem>
                </List>
                <List>
                    <ListItem itemHeader style={{ paddingBottom: 15, paddingTop: 25 }}>
                        <Left>
                            <Icon style={Theme.list.icon} name="information-circle"/>
                            <Body>
                            <Text style={Theme.list.title}>Information</Text>
                            </Body>
                        </Left>
                    </ListItem>
                    <ListItem>
                        <List style={{ width: '100%' }}>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <Left>
                                    <Thumbnail source={{ uri: this.props.loginReducer.userdata.profile.picture.data.url }}
                                               style={{
                                                   height: this.props.loginReducer.userdata.profile.picture.data.height,
                                                   width: this.props.loginReducer.userdata.profile.picture.data.width
                                               }}/>
                                    <Body>
                                    <Text style={Theme.list.text}>Hello {this.props.loginReducer.userdata.profile.first_name}!</Text>
                                    </Body>
                                </Left>
                            </ListItem>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <View>
                                    <Text style={Theme.list.text}>Name</Text>
                                    <Text style={Theme.list.subtext}>{this.props.loginReducer.userdata.profile.name}</Text>
                                </View>
                            </ListItem>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <View>
                                    <Text style={Theme.list.text}>Email</Text>
                                    <Text style={Theme.list.subtext}>{this.props.loginReducer.userdata.profile.email}</Text>
                                </View>
                            </ListItem>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <View>
                                    <Text style={Theme.list.text}>Gender</Text>
                                    <Text style={Theme.list.subtext}>{this.props.loginReducer.userdata.profile.gender}</Text>
                                </View>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
                <List>
                    <ListItem itemHeader style={{ paddingBottom: 15, paddingTop: 25 }}>
                        <Left>
                            <Icon style={Theme.list.icon} name="more"/>
                            <Body>
                            <Text style={Theme.list.title}>Action</Text>
                            </Body>
                        </Left>
                    </ListItem>
                    <ListItem style={{ paddingBottom: 15, paddingTop: 25 }}>
                        <List style={{ width: '100%' }}>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <Button style={{ backgroundColor: Theme.color.post }} iconLeft onPress={() => {
                                    this.props.loginReducer.FBLoginManager.logout( ( o ) => {
                                        this.props.dispatch( action.userLogout( o ) );
                                        this.props.dispatch( action.setFBLoginManager( FBLoginManager ) );
                                        this.props.navigation.navigate( 'Home' );
                                    } );
                                }}>
                                    <Icon name='log-out'/>
                                    <Text>Log-out</Text>
                                </Button>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Container>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        profileReducer: state.profileReducer,
        loginReducer: state.loginReducer,
    };
};

export default connect( mapStateToProps )( Profile );
