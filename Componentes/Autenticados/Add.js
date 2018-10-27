import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Add extends Component {
  render() {
    const { navigation } = this.props;
    console.log(this.props);

    return (
      <View>
        <Button
          title='Seleccionar de galería'
          onPress={() => {navigation.navigate('Seleccion')}}
        />
        <Text>Add</Text>
        <Button 
          title='Tomar foto'
          onPress={() => {navigation.navigate('Seleccion')}}
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
        backgroundColor: '#f9f9f9',
    },
});