import React from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, TextInput, Button, Subheading } from 'react-native-paper'
import * as Animatable from 'react-native-animatable';
import { theme } from '../global';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    lastName: '',
    salespersonId: ''
  }

  _verifyForm = () => {
    return true;
  }

  _login = () => {
    const { navigation } = this.props;
    if (this._verifyForm())
      navigation.navigate('MainStack');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Animatable.View animation="fadeIn" style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
              <View style={styles.container}>

                <Animatable.View
                  style={styles.headerContainer}
                  animation="fadeInRight"
                >
                  <Animatable.Image
                    animation="pulse"
                    iterationCount={2}
                    delay={1800}
                    source={require('../../assets/images/car.png')}
                    style={styles.headerIcon}
                    resizeMode="contain"
                  />
                  <Subheading style={styles.logoText} adjustsFontSizeToFit numberOfLines={1}>
                    Standard Auto Sales
                  </Subheading>
                </Animatable.View>

                <Animatable.View style={styles.bodyContainer} animation="fadeInRight" delay={800}>
                  <Text style={styles.loginText}>Employee Login</Text>
                  <TextInput
                    label='Last Name'
                    value={this.state.lastName}
                    onChangeText={lastName => this.setState({ lastName })}
                    style={styles.textInput}
                    mode={'outlined'}
                  />
                  <TextInput
                    label='Salesperson ID'
                    value={this.state.salespersonId}
                    onChangeText={salespersonId => this.setState({ salespersonId })}
                    style={styles.textInput}
                    mode={'outlined'}
                    keyboardType="number-pad"
                  />
                  <Button
                    style={styles.loginButton}
                    onPress={this._login}
                    mode="contained"
                    uppercase={false}
                    loading={this.props.isLoading}
                  >
                    Login
                  </Button>
                </Animatable.View>

              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </Animatable.View>
      </SafeAreaView >
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
    backgroundColor: theme.colors.background
  },
  headerContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  bodyContainer: {
    flex: 2,
    elevation: 10,
    padding: 10,
  },
  headerIcon: {
    flex: 0.5,
    height: undefined,
    width: undefined,
  },
  logoText: {
    fontFamily: 'cereal-bold',
    alignSelf: 'center'
  },
  loginText: {
    fontSize: 30,
    fontFamily: 'cereal-medium',
    paddingBottom: 10
  },
  textInput: {
    marginBottom: 15
  },
  loginButton: {
    marginTop: 30
  }
})

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {})(LoginScreen)
