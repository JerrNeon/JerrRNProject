/**
 * Created by Administrator on 2017/2/4.
 * 侧滑
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    TouchableOpacity,
    Image,
    View,
    Dimensions,
} from 'react-native';
import CommonBackView from './common_back'
import theme from './util/theme';

export default class DrawerLayoutDemo extends Component {

    render() {
        const {navigator} = this.props;
        var navigationView = (
            <View style={styles.container}>
                <View style={styles.nav_top_view}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={require('./image/ic_launcher.png')}
                    />
                    <Text
                        style={{marginTop: 10, fontSize: 16, color: 'white'}}>非著名程序员</Text>
                </View>
                <TouchableOpacity
                    onPress={this.close}
                >
                    <View style={styles.nav_item_view}>
                        <Image
                            style={{width: 20, height: 20}}
                            source={require('./image/ic_launcher.png')}/>
                        <Text style={{fontSize: 14, color: 'grey', marginLeft: 10}}>首页</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.nav_item_view}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('./image/ic_launcher.png')}
                    />
                    <Text style={{fontSize: 14, color: 'grey', marginLeft: 10}}>礼物</Text>
                </View>
                <View style={styles.nav_item_view}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('./image/ic_launcher.png')}
                    />
                    <Text style={{fontSize: 14, color: 'grey', marginLeft: 10}}>设置</Text>
                </View>
            </View>
        );
        return (
            <View style={{height: theme.screenHeight}}>
                <CommonBackView title={'侧滑'} navigator={navigator}/>
                <DrawerLayoutAndroid
                    ref={(drawer) => {
                    this.drawer = drawer;
                } }
                    drawerWidth={260}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <View style={styles.container}>
                        <View style={styles.title_view}>
                            <TouchableOpacity
                                onPress={this.open}
                            >
                                <Image
                                    style={{width: 30, height: 30}}
                                    source={require('./image/ic_launcher.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.title_text}>
                                非著名程序员
                            </Text>
                            <Text style={styles.title_text}>
                                更多
                            </Text>
                        </View>
                    </View>
                </DrawerLayoutAndroid>
            </View>
        );
    }

    open = () => {
        this.drawer.openDrawer();
    }

    close = () => {
        this.drawer.closeDrawer();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    nav_top_view: {
        flexDirection: 'column',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    nav_item_view: {
        flexDirection: 'row',
        height: 50,
        paddingLeft: 30,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    title_text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
});

