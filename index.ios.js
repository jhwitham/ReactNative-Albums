// Import library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => {
  return (
    <Header />
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
