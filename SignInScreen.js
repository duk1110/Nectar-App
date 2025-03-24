import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get your groceries with nectar</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Number")}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.fbButton]} onPress={() => navigation.navigate("Number")}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "#4285F4", padding: 15, borderRadius: 10, marginVertical: 10, width: "80%", alignItems: "center" },
  fbButton: { backgroundColor: "#3B5998" },
  buttonText: { color: "white", fontSize: 16 },
});
