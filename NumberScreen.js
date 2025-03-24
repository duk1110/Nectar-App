import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function NumberScreen({ navigation }) {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Verification")}>
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
