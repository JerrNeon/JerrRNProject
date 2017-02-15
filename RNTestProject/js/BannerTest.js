/**
 * Created by Administrator on 2017/2/8.
 */
'use strict';

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Banner from 'react-native-banner';
import CommonBackView from './common_back';

export default class BannerTest extends Component {

    // static propTypes = {
    //     navigator: React.PropTypes.object.isRequired,
    //     route: React.PropTypes.object.isRequired
    // }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            clickTitle: 'You can try clicking beauty',
            defaultIndex: 0,
        };

        this.banners = [
            {
                title: 'beauty 1',
                image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
            },
            {
                title: 'beauty 2',
                image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
            },
            {
                title: 'The next banner has no title',
                image: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
            },
            {
                // title: 'no title',
                image: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
            },
        ];

        this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};
        this.defaultIndex = 0;
    }

    render() {
        const {navigator} = this.props;
        return (
            <View style={[styles.container, this.iosMarginTop]}>
                <CommonBackView title={'Banner'} navigator={navigator}/>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
                <Text>{this.state.clickTitle}</Text>
            </View>
        );
    }

    clickListener(index) {
        this.setState({
            clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
        })
    }

    onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index},total:${state.total}`);
        this.defaultIndex = state.index;
    }

    _back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
