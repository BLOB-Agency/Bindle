import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: "100%",
    marginTop: 24,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonTextMasked: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: 'transparent',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default styles;