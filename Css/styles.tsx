import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#3d3d3d',
    paddingHorizontal: 5,
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 8,
    margin: 4,
  },
  container: {
    flexDirection: 'row',
    padding: 4,
    margin: 8,
  },
  scrollBoxes: {
    width: 120,
    height: 120,
    backgroundColor: '#dcb61dff',
    borderRadius: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    fontWeight: 500,
    color: '#3d3d3d'
  }
});

export default style