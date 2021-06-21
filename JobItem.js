import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class JobItem extends Component {
    state = {
        isLoading: true,
        data: null
    };
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`);
        const json = await response.json();
        console.log(json);
        this.setState({
            isLoading: false,
            data: json
        });

    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating />
                </View>
            )
        } else {
            return (

                <Text style={styles.item}>{this.state.data.title}</Text>


            );


        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding:1,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
});
