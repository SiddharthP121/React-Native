import { StyleSheet, useWindowDimensions } from "react-native";
const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: '#c599d9',

    
  },
  heading: {
    fontSize: 30,
    fontWeight: 500,
  },
  inputContainer: {
    margin: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#c599d9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 18,
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
export default styles