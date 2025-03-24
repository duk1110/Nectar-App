import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <TextInput style={styles.input} placeholder="Code" keyboardType="numeric" value={code} onChangeText={setCode} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: "#6FCF97", padding: 15, borderRadius: 50, width: 60, height: 60, alignItems: "center", justifyContent: "center" },
  buttonText: { fontSize: 24, color: "white" },
});
