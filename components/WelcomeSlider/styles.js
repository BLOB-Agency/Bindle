import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Semi-transparent background
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain", // Use resizeMode for images in React Native instead of objectFit
  
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;