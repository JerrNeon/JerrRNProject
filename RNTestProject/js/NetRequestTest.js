/**
 * Created by Administrator on 2017/2/4.
 * 网络请求
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
} from 'react-native'
import CommonBackView from './common_back';

const deviceHeightDp = Dimensions.get('window').height;

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class NetRequestTest extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            movies: null,
            i: 0
        };
        setInterval(() => {
            this.setState({i: (this.state.i + 1)});
        }, 1000);
    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        let movie = this.state.movies[this.state.i % this.state.movies.length];
        return this.renderMovie(movie);
    }

    fetchData() {
        fetch(REQUEST_URL, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                });
            })
            .catch((error) => {
                callback(error);
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    renderLoadingView() {
        const {navigator} = this.props;
        return (
            <View style={styles.all}>
                <CommonBackView title="网络请求" navigator={navigator}/>
                <View style={styles.container}>
                    <Text>正在加载电影数据......</Text>
                </View>
            </View>
        );
    }

    renderMovie(movie) {
        const {navigator} = this.props;
        return (
            <View style={styles.all}>
                <CommonBackView title="网络请求" navigator={navigator}/>
                <View style={styles.container}>
                    <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    all: {
        flexDirection: 'column',
        height: deviceHeightDp,
    },
    container: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 100, height: 80
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20, marginBottom: 8, textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },
});
