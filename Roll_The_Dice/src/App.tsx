import { NewAppScreen } from '@react-native/new-app-screen';
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ImageSourcePropType,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import type { JSX, PropsWithChildren } from 'react';
import five from '../assets/five.jpg';
import four from '../assets/four.png';
import three from '../assets/three.png';
import two from '../assets/two.jpg';
import one from '../assets/one.jpg';
import six from '../assets/six.jpg';

type DiceImageProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceImageProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(six);
  const rollTheDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(one);
        break;
      case 2:
        setDiceImage(two);
        break;
      case 3:
        setDiceImage(three);
        break;
      case 4:
        setDiceImage(four);
        break;
      case 5:
        setDiceImage(five);
        break;
      case 6:
        setDiceImage(six);
        break;
      default:
        setDiceImage(one);
        break;
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Roll The Dice</Text>
        </View>
        <TouchableOpacity onPress={rollTheDice}>
          <Dice imageUrl={diceImage} />
        </TouchableOpacity>
        <Pressable onPress={rollTheDice}>
          <Text style={styles.rollButton}>Roll the Dice</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F1',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#2C3A47',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  diceImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2C3A47',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rollButton: {
    backgroundColor: '#2C3A47',
    color: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
});

export default App;
