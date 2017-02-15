/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    View
} from 'react-native';
import Home from './js/Home';

export default class RNTestProject extends Component {

    render() {
        var defaultName = 'Home';
        var defaultComponent = Home;
        return (
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={{
                        name:defaultName,
                        component: defaultComponent
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        if(route.component)
                         return <Component navigator={navigator} />
                    }}
                    configureScene={() =>{
                        //跳转的动画
                        return Navigator.SceneConfigs.FloatFromLeft;
                    }}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('RNTestProject', () => RNTestProject);
