/**
 * Counter App with Hello World
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, StatusBar, useColorScheme } from 'react-native';
import FlatCards from './components/flatCards';
import FacnyCards from './components/facnyCards';
import ElevatedCards from './components/elevatedCards';
import { ScrollView } from 'react-native';
import EmployeeData from './components/employeeData';
import ActionCards from './components/actionCards';
import {
  SafeAreaProvider,
  SafeAreaView,

} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <FlatCards />
          <FacnyCards />
          <ElevatedCards />
          <ActionCards />
          <EmployeeData />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
