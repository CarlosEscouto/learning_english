import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './Routes'
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Montserrat: require("./assets/Fonts/Montserrat-Regular.ttf"),
      Montserrat_medium: require("./assets/Fonts/Montserrat-Medium.ttf"),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded ? (
        <Routes />
      ) : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
