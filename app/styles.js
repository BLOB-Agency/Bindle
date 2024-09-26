import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 24,
    fontSize: 14,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain", // Use resizeMode for images in React Native instead of objectFit
   
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    gap: 24,
  },
});

export default styles;
