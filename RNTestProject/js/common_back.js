/**
 * Created by Administrator on 2017/2/14.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
}from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

export default class CommonBackView extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <View style={styles.actionbar}>
                <TouchableOpacity onPress={()=>{this._back()}}>
                    <View style={styles.left}>
                        <Image source={require('./image/ic_launcher.png')} style={styles.image}/>
                        <Text style={styles.back}>返回</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.right}>菜单</Text>
            </View>
        )
    };

    _back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    actionbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        padding: 10,
        width: deviceWidthDp,
    },
    left: {
        flexDirection: 'row',
    },
    image: {
        width: 20,
        height: 20,
    },
    back: {
        color: '#ffffff',
        paddingLeft: 2
    },
    title: {
        color: '#ffffff',
        fontSize: 22,
    },
    right:{
        color: '#ffffff',
    }
});