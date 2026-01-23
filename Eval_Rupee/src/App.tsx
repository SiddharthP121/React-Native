import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  Pressable,
  Text,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { currencyByRupee } from './constant';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from './components/CurrencyButton';

function App(): React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';
  const [currencyType, setCurrencyType] = useState<string | null>(null);
  const [amountAfterExchage, setAmountAfterExchage] = useState<string | null>(
    null,
  );
  const [amountInRupee, setAmountInRupee] = useState('');
  const handlePress = (currencyElement: Currency) => {
    if (!amountInRupee) {
      return Snackbar.show({
        text: 'Enter any value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const inputInRupee = parseFloat(amountInRupee);
    if (isNaN(inputInRupee)) {
      return Snackbar.show({
        text: 'Enter a valid amount',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    } else {
      const result = `${(currencyElement.value * inputInRupee).toFixed(2)} ${currencyElement.symbol}`;
      setAmountAfterExchage(result);
      setCurrencyType(currencyElement.name);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#FFFFFF"
      />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>EVAL - ₹</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.inputContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter amount in Rupee'}
              value={amountInRupee}
              keyboardType="numeric"
              onChangeText={setAmountInRupee}
              placeholderTextColor="#758283"
            />
          </View>
          {amountAfterExchage && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>{amountAfterExchage}</Text>
            </View>
          )}
          <View >
            <FlatList
              numColumns={3}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.button,
                    currencyType === item.name && styles.select,
                  ]}
                  onPress={() => handlePress(item)}>
                  <CurrencyButton {...item} />
                </Pressable>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  topContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  mainContent: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  rupee: {
    fontSize: 22,
    fontWeight: '500',
    color: '#1F2937',
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    height: 50,
    color: '#1F2937',
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
 
  button: {
    flex: 1,
    margin: 5,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  select: {
    backgroundColor: '#E5E7EB',
  },
});

export default App;
