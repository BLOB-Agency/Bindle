import WelcomeSlider from "@/components/WelcomeSlider/WelcomeSlider";
import { Button, Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function Index() {
  return (
    <>
      <WelcomeSlider />
      <View style={styles.homeContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo-bindle.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>Better relationships, Happier Life.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPrimary
            text="Sign In"
            onPress={() => console.log("Sign In Pressed")}
            gradientType="grad-1"
          />

          <ButtonPrimary
            text="Sign Up"
            onPress={() => console.log("Sign Up Pressed")}
            gradientType="grad-2"
          />
        </View>
      </View>
    </>
  );
}
