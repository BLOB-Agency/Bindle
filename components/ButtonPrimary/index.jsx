import React, { useRef } from "react";
import { Animated, Pressable, Text, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default function ButtonPrimary({ text, onPress, gradientType = "grad-1" }) {
  const scaleValue = useRef(new Animated.Value(1)).current; // Initial scale value (1 = 100%)

  // Define gradients based on the prop
  const gradients = {
    "grad-1": ["#22d3ee8a", "#e879f977", "#38BDF9"], // Grad-1 colors
    "grad-2": ["#38bcf998", "#818df88c", "#ff4756b4"], // Grad-2 colors
  };

  // Function to scale down the button when pressed
  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95, // Scale down to 95%
      duration: 150, // Duration of the transition in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  // Function to scale the button back to normal size when released
  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1, // Return to original size
      duration: 150, // Duration of the transition in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      {/* Animated View for scaling */}
      <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
        <MaskedView
          maskElement={<Text style={styles.buttonTextMasked}>{text}</Text>}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={gradients[gradientType]} // Select gradient based on prop
          >
            <Text style={styles.buttonText}>{text}</Text>
          </LinearGradient>
        </MaskedView>
      </Animated.View>
    </Pressable>
  );
}