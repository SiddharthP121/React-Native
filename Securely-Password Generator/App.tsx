import {
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import React, { useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState(isDarkMode);
  const paswordSchema = yup.object().shape({
    passowrdLength: yup
      .number()
      .min(4, 'Password length must be at least 4')
      .max(16, 'Password length must be at most 16')
      .required('Password length is required'),
  });
  const [upperSelection, setUpperSelection] = useState(false);
  const [lowerSelection, setLowerSelection] = useState(true);
  const [numberSelection, setNumberSelection] = useState(true);
  const [charSelection, setCharSelection] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const { width } = useWindowDimensions();

  const handlePasswordCharacters = (passowrdLength: number) => {
    let passwordCharacters = '';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '12344567890';
    const symbols = '!@#$%^&*()- _+=[]{},.<>?/';
    if (upperSelection) {
      passwordCharacters += upperChars;
    }
    if (lowerSelection) {
      passwordCharacters += lowerChars;
    }
    if (numberSelection) {
      passwordCharacters += digits;
    }
    if (charSelection) {
      passwordCharacters += symbols;
    }
    const result = handleCreatePassword(passowrdLength, passwordCharacters);
    setPassword(result);
    setIsPasswordGenerated(true);
  };

  const handleCreatePassword = (
    passowrdLength: number,
    passwordCharacters: string,
  ) => {
    let password = '';
    for (let index = 0; index < passowrdLength; index++) {
      const charIndex = Math.ceil(Math.random() * passwordCharacters.length);
      password += passwordCharacters.charAt(charIndex);
    }
    return password;
  };
  const resetPrameters = () => {
    setLowerSelection(true);
    setNumberSelection(true);
    setUpperSelection(false);
    setCharSelection(false);
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? 'black' : 'white'}
        translucent={true}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>Securely</Text>
              <TouchableOpacity onPress={() => setIsDark(!isDark)}>
               <Text>

               </Text>
                
              </TouchableOpacity>
            </View>
            <View>
              {' '}
              {/* Main outer container */}
              <Formik
                initialValues={{ passowrdLength: '' }}
                validationSchema={paswordSchema}
                validateOnChange={true}
                onSubmit={values => {
                  handlePasswordCharacters(+values.passowrdLength);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleReset,
                  /* and other goodies */
                }) => (
                  <>
                    <View style={styles.formContainer}>
                      <View style={styles.passwordLengthContainer}>
                        <View style={styles.passwordHeadingContainer}>
                          <Text style={styles.passwordHeading}>
                            Password Length
                          </Text>
                        </View>{' '}
                        {/**Passowrd length text input */}
                        <TextInput
                          style={styles.passwordLenInput}
                          placeholder="ex.9"
                          value={values.passowrdLength}
                          onChangeText={handleChange('passowrdLength')}
                          keyboardType="numeric"
                        />
                      </View>
                      <View>
                        {errors.passowrdLength ? (
                          <Text style={styles.errorMessage}>
                            {errors.passowrdLength}
                          </Text>
                        ) : (
                          <Text style={styles.formalErrorSpace}></Text>
                        )}
                      </View>
                      <View>
                        <View style={styles.typeSelectorContainer}>
                          <Text style={styles.typeSelectorText}>
                            Upper Case
                          </Text>
                          <View>
                            <BouncyCheckbox
                              isChecked={upperSelection}
                              fillColor="#708ac1"
                              onPress={() => setUpperSelection(!upperSelection)}
                            />
                          </View>
                        </View>
                        <View style={styles.typeSelectorContainer}>
                          <Text style={styles.typeSelectorText}>
                            Lower Case
                          </Text>
                          <View>
                            <BouncyCheckbox
                              isChecked={lowerSelection}
                              fillColor="#679354"
                              onPress={() => setLowerSelection(!lowerSelection)}
                            />
                          </View>
                        </View>
                        <View style={styles.typeSelectorContainer}>
                          <Text style={styles.typeSelectorText}>Numbers</Text>
                          <View>
                            <BouncyCheckbox
                              isChecked={numberSelection}
                              fillColor="#ce4c28"
                              onPress={() =>
                                setNumberSelection(!numberSelection)
                              }
                            />
                          </View>
                        </View>
                        <View style={styles.typeSelectorContainer}>
                          <Text style={styles.typeSelectorText}>Symbols</Text>
                          <View>
                            <BouncyCheckbox
                              isChecked={charSelection}
                              fillColor="#986198"
                              onPress={() => setCharSelection(!charSelection)}
                            />
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                        style={styles.resetContainer}
                        onPress={() => resetPrameters()}
                      >
                        <Text style={styles.buttonText}>Reset</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.generatePasswordContainer}
                        onPress={() =>{
                          handlePasswordCharacters(+values.passowrdLength)
                          handleReset()
                        }
                        }
                      >
                        <Text style={styles.buttonText}>Generate Password</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
            <View style={styles.resultOuterContainer}>
              <View style={styles.resultContainer}>
                <Text style={styles.passwordText}>Password</Text>
                {isPasswordGenerated ? (
                  <Text style={styles.password} selectable={true}>
                    {password}
                  </Text>
                ) : null}
              </View>
              <View style={styles.pressContainer}>
                <Text style={styles.press}>Long press to Copy</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'ui-rounded',
    color: '#173963',
    marginHorizontal: 12,
  },
  logoContainer: {
    backgroundColor: '#c0dcfd',
    borderRadius: 30,
    padding: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formContainer: {
    marginVertical: 20,
  },
  passwordHeadingContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  passwordHeading: {
    fontSize: 17,
    fontWeight: '700',
  },
  passwordLenInput: {
    borderWidth: 2,
    borderColor: '#c599d9',
    // padding: 2,

    marginVertical: 10,
    borderRadius: 10,
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    width: '50%',
    // alignSelf: 'center',
  },
  passwordLengthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  formalErrorSpace: {
    fontSize: 14,
    marginTop: 4,
  },
  typeSelectorContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 25,
  },
  typeSelectorText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resetContainer: {
    backgroundColor: '#b3123a',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  generatePasswordContainer: {
    backgroundColor: '#2a714f',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  resultOuterContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  resultContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  passwordText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  password: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  press: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  pressContainer: {
    alignItems: 'center',
  },
  icons: {},
});
export default App;
