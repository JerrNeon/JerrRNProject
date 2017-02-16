'use strict';

import React, {Component} from 'react';
import{
    View,
    Button,
    StyleSheet,
}from 'react-native';
import BaseComponent from './ComponentTest';
import BannerTest from './BannerTest'
import DrawerLayout from './DrawerLayoutDemo';
import NetRequestTest from './NetRequestTest';
import ListViewTest from './ListViewTest';

export default class Home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        const {navigator} = this.props;
        return (
            <View style={styles.container}>
                <Button title={'基本控件'} onPress={()=>{this._baseComponent(navigator);}}/>
                <View style={styles.line}/>
                <Button title={'Banner'} onPress={()=>{this._banner(navigator);}}/>
                <View style={styles.line}/>
                <Button title={'侧滑'} onPress={()=>{this._drawerLayout(navigator);}}/>
                <View style={styles.line}/>
                <Button title={'网络请求'} onPress={()=>{this._netRequestTest(navigator);}}/>
                <View style={styles.line}/>
                <Button title={'ListView'} onPress={()=>{this._listView(navigator);}}/>
                <View style={styles.line}/>
            </View>
        );
    }

    _baseComponent(navigator) {
        if (navigator) {
            navigator.push({
                name: 'BaseComponent',
                component: BaseComponent
            })
        }
    }

    _banner(navigator) {
        if (navigator) {
            navigator.push({
                name: 'BannerTest',
                component: BannerTest
            })
        }
    }

    _drawerLayout(navigator) {
        if (navigator) {
            navigator.push({
                name: 'DrawerLayout',
                component: DrawerLayout
            })
        }
    }

    _netRequestTest(navigator) {
        if (navigator) {
            navigator.push({
                name: 'NetRequestTest',
                component: NetRequestTest
            })
        }
    }

    _listView(navigator) {
        if (navigator) {
            navigator.push({
                name: 'ListViewTest',
                component: ListViewTest,
            })
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        height: 100
    },
    line: {
        backgroundColor: '#AAAAAA',
        height: 1
    }
});