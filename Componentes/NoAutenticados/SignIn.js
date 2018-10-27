import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';
import { actionLogin } from '../../Store/ACCIONES';

class SignIn extends Component {
  signInDeUsuario = (values) => {
    this.props.login(values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <SignInForm login={this.signInDeUsuario} />
        <Button
          title="SignUp"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch(actionLogin(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);