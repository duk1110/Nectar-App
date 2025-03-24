import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>nectar</Text>
      <Text style={styles.subtitle}>online groceries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#6FCF97" },
  logo: { fontSize: 32, fontWeight: "bold", color: "white" },
  subtitle: { fontSize: 16, color: "white" },
});
