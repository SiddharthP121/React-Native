import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react';
import style from '../Css/styles';

export default function facnyCards() {
  return (
    <View>
      <View>
        <Text style={style.heading}>Fancy Cards</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={style.container}>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
          <View style={style.scrollBoxes}>
            <Text style={style.text}>Scroll</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
