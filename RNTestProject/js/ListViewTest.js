/**
 * Created by Administrator on 2017/2/16.
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Image,
    ToastAndroid,
}from 'react-native';
import CommonBackView from './common_back';
import theme from './util/theme';

let REQUEST_URL = "http://223.202.123.123:8080/cheshijia/api/market/getMainList?type=1&page=1&rows=10";
//let params = "type=1&page=1&rows=10";
let params = new FormData();
params.append("type", "1");
params.append("page", "1");
params.append("rows", "10");

export default class ListViewTest extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL, {
            method: 'GET',
            //body: params,
        }).then((response) => response.json())
            .then((responseData => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.mainList),
                    loaded: true,
                });
            }))
            .catch((error) => {

            })
            .done();
    }

    render() {
        const {navigator} = this.props;
        if (!this.state.loaded) {
            return this.renderLoadingView(navigator);
        }
        return (
            <View>
                <CommonBackView title="ListView" navigator={navigator}/>
                <ListView
                    key="1"
                    dataSource={this.state.dataSource}
                    renderRow={this.renderLv}
                    renderSeparator={this.renderDividerView}
                    style={styles.listview}
                />
            </View>)
    }

    renderLoadingView(navigator) {
        return (
            <View style={{flexDirection:'column'}}>
                <CommonBackView title="ListView" navigator={navigator}/>
                <Text style={{flex: 1, justifyContent: 'center'}}>正在加载数据...</Text>
            </View>
        );
    }

    renderLv(data) {
        return (
            <View style={styles.container}>
                <Image source={{uri:data.img}}
                       style={styles.img}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.text}>{data.name}</Text>
                    {<Text style={styles.text}>{data.specifications}/{data.carstatus}</Text>}
                    {<Text style={styles.text}>{data.color1}/{data.color2} {data.addressto}</Text>}
                </View>
            </View>)
    }

    renderDividerView() {
        return (
            <View style={styles.divider}/>
        );
    }
}

const styles = StyleSheet.create({
    listview: {},
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    img: {
        width: 30,
        height: 30,
    },
    rightContainer: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10,
    },
    text: {
        color: '#333333',
        fontSize: 16,
        marginTop: 2,
    },
    divider: {
        backgroundColor: '#cccccc',
        height: 1
    }
});
