import React, { Component } from 'react';
import { FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, StyleSheet, Text, View, Linking } from 'react-native';
import { styles } from './JobStyles';


export default class App extends Component {
  state = {
    isLoading: true,
    data: [],
    favorites: []
  };
  componentDidMount() {
    this.fetchData();
  }

   fetchData = async () => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`);
    const json = await response.json();
    const jobactions = json.map(this.fetchJobData);
    const results = await Promise.all(jobactions);
    const sortedResults = this.getSortedResult(results);
    const jobs = sortedResults.map((job) => ({
      "id": job.id,
      "title": job.title,
      "url": job.url,
      "createdAt": new Date(job.time).toLocaleString()
    }));
    console.log(jobs);
    this.setState({
      isLoading: false,
      data: jobs
    });

  }
  getSortedResult = (results) => {
    return results.sort((a, b) => a.time - b.time)
  }
  fetchJobData = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const json = await response.json();
    console.log(json);
    return json;
  }

  addToFavorites = (item) => {
    const favorites = Object.assign([], this.state.favorites);
    const index = favorites.findIndex(f => f.id === item.id);

    if (index === -1) {
        favorites.push(item);

    } else {
        favorites.splice(index, 1);

    }
    this.setState({
        favorites
    });

}


  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(`${item.url}`)}>
      <View style={styles.mainCardView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.createdAt}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>My Job Lists !!!</Text>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  }
}
