import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Search extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text> Search </Text>
        <Button 
          title="Publicación"
          onPress={() => {navigation.navigate('Publicacion');}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});