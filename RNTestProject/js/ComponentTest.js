import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    ToastAndroid,
    TextInput,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import CommonBackView from './common_back';

export default class AwesomeProject extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {selectedTab: ''};
    }

    onMessage() {
        ToastAndroid.show('点击了好吧', ToastAndroid.SHORT);
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        const {navigator} = this.props;
        return (
        <View style={styles.container}>
            <CommonBackView title={'Home'} navigator={navigator}/>
            <ScrollView style={{flex: 1}}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu{'\n'}
                    新的一天
                </Text>
                <Blink text='I love to blink'/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <Image source={pic} style={{width: 350, height: 110}}/>
                <TouchableHighlight onPress={this.onMessage}>
                    <Text style={styles.message}>点击</Text>
                </TouchableHighlight>
                <TextInput style={{width: 350, height: 40}}/>
            </ScrollView>
            <View style={{width: 370, height: 60}}>
                <TabNavigator tabBarStyle={{height: 60, overflow: 'hidden'}}
                              sceneStyle={{paddingBottom: 0}}>
                    <TabNavigator.Item
                        titleStyle={{fontSize: 14}}
                        selectedTitleStyle={{color:'#A00000',fontSize: 18}}
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={() => <Image source={require('./image/ic_launcher.png')} style={{width:30,height:30}}/>}
                        renderSelectedIcon={() => <Image source={require('./image/ic_launcher.png')} style={{width:30,height:30}}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        titleStyle={{fontSize: 14}}
                        selected={this.state.selectedTab === 'recommend'}
                        title="推荐"
                        renderIcon={() => <Image source={require('./image/ic_launcher.png')} style={{width:30,height:30}}/>}
                        renderSelectedIcon={() => <Image source={require('./image/ic_launcher.png')} style={{width:30,height:30}}/>}
                        onPress={() => this.setState({selectedTab: 'recommend'})}>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        titleStyle={{fontSize: 14}}
                        selected={this.state.selectedTab === 'profile'}
                        title="我的"
                        renderIcon={() => <Image source={require('./image/ic_launcher.png')} style={{width:30,height:30}}/>}
                        renderSelectedIcon={() => <Image source={require('./image/ic_launcher.png')} style={{width:30,height:30}}/>}
                        //renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        </View>
    )
        ;
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : (this.props.text + ',too');
        return (
            <Text>{display}</Text>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',//设置布局中子元素的排列方式
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',//设置布局横向或纵向(默认纵向)
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    message: {
        textAlign: 'center',
        color: '#333333',
        padding: 20,
        backgroundColor: '#fff8dc',
    },
});