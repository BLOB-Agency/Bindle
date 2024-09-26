import { Image, Modal, Text, View } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";

export default function WelcomeSlider() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal visible={isVisible} animationType="fade">
      {/* Center the content inside the modal */}
      <View style={styles.modal}>
        <Image
          source={require("../../assets/images/logo-bindle.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Better relationships, Happier Life.</Text>
      </View>
    </Modal>
  );
}