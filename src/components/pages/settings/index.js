'use strict';

import React from 'react';
import { Container, Icon, List, ListItem, Left, Body, View, Text } from 'native-base';
import { connect } from 'react-redux';

import Theme from '../../../Theme';
import Main from '../../layouts/main/index';

class Settings extends Main {

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
                            <Text style={Theme.cta.text}>Settings</Text>
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
                        <List>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <View>
                                    <Text style={Theme.list.text}>Application version</Text>
                                    <Text style={Theme.list.subtext}>0.1</Text>
                                </View>
                            </ListItem>
                            <ListItem style={{ borderBottomColor: 'transparent', paddingTop: 0 }}>
                                <View>
                                    <Text style={Theme.list.text}>Application developer</Text>
                                    <Text style={Theme.list.subtext}>Fabio Ansaldi</Text>
                                </View>
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
        settingsReducer: state.settingsReducer
    };
};

export default connect( mapStateToProps )( Settings );
