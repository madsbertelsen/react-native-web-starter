import React, { Component } from 'react';
import { render, View, Text, StyleSheet } from 'react-native-web';
import Hello from './hello';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Hello name={this.state.name} />
        <Text>
          Start editing to see some magic happen :)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  }
})

render(<App />, document.getElementById('root'));
