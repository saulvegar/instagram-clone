import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/ACCIONES';
import Publicacion from './Publicacion';

class Home extends Component {
  componentDidMount() {
    this.props.descargarPublicaciones();
  }

  render() {
    console.log(this.props.publicaciones);
    const { navigation, autores } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.publicaciones}
          renderItem={({ item, index }) => <Publicacion item={item} autor={autores[index]} />}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
        {/* <Text> Home </Text>
        <Button
          title="Autor"
          onPress={() => { navigation.navigate('Autor'); }}
        />
        <Button
          title='Comentarios'
          onPress={() => { navigation.navigate('Comentarios'); }}
        /> */}
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
  separador: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
});

const mapStateToProps = state => ({
  publicaciones: state.reducerPublicacionesDescargadas,
  autores: state.reducerAutoresDescargados,
});

const mapDispatchToProps = dispatch => ({
  descargarPublicaciones: () => {
    dispatch(actionDescargarPublicaciones());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
