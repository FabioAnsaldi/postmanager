'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Drawer, Header, Footer, Body, Title, Left, FooterTab, Icon, Button, Content, Text } from 'native-base';
import Theme from '../../../Theme';
import Menu from '../../widgets/menu/index';

class Main extends Component {
    closeDrawer = () => {
        this._drawer._root.close()
    };

    openDrawer = () => {
        this._drawer._root.open();
    };

    renderHeader() {
        return (
            <Header style={{ backgroundColor: Theme.color.white }}>
                <Left>
                    <Button style={{ backgroundColor: Theme.color.post }} transparent onPress={() => {
                        this.openDrawer()
                    }}>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                <Image source={require( '../../../assets/images/post_logo.png' )} style={{ height: 50, width: 127 }}/>
                </Body>
            </Header>
        );
    };

    renderFooter() {
        return (
            <Footer>
                <FooterTab style={{ backgroundColor: Theme.color.post }}>
                    <Body>
                    <Title>Footer content</Title>
                    </Body>
                </FooterTab>
            </Footer>
        );
    }

    renderContent() {
        return (
            <Content>
                <Text>{this.props.mainReducer.title}</Text>
            </Content>
        );
    }

    render() {
        return (
            <Drawer
                ref={( ref ) => {
                    this._drawer = ref;
                }}
                content={<Menu navigation={this.props.navigation}/>}
                onClose={() => this.closeDrawer()}>
                <Container>
                    {this.renderHeader()}
                    {this.renderContent()}
                    {this.renderFooter()}
                </Container>
            </Drawer>
        );
    }
}

export default Main;
