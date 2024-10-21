import React, { Component } from 'react';
import { render, View, Text, StyleSheet } from 'react-native-web';
import Hello from './hello';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <Hello name={this.state.name} />;
  }
}

const styles = StyleSheet.create({
  container: {},
});

render(<App />, document.getElementById('root'));
