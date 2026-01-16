import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [hexColorCode, setHexColorCode] = useState('#FFFFFF');

  const generateHexCode = () => {
    const hexCharacters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      hexCode += hexCharacters[index];
    }
    setHexColorCode(hexCode);
  };

  const resetColor = () => {
    setHexColorCode('#FFFFFF');
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={isDarkMode ? '#1A1A1A' : '#F5F5F5'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: isDarkMode ? '#1A1A1A' : '#F5F5F5' },
        ]}
      >
        <View style={styles.titleBar}>
          <Text
            style={[
              styles.titleText,
              { color: isDarkMode ? '#FFFFFF' : '#000000' },
            ]}
          >
            COLORA
          </Text>
        </View>
        <View style={[styles.container, { backgroundColor: hexColorCode }]}>
          <View style={styles.content}>
            <Text selectable={true} style={styles.hexCodeText}>
              {hexColorCode}
            </Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={generateHexCode}
                style={[styles.button, styles.primaryButton]}
              >
                <Text style={styles.primaryButtonText}>Generate Color</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={resetColor} style={styles.button}>
                <Text style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  titleBar: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  hexCodeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  buttonGroup: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
  },
  primaryButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
