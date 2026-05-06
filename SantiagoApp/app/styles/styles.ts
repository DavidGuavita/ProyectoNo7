import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 60,
    fontWeight: 'bold'
  },

  image: {
    width: 350,
    height: 350,
    marginTop: 20
  },

  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20
  },

  buttonText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold'
  }
});