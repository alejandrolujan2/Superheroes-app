import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormularioComponent() {

  const [nombre, setNombre] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Buscar héroe"
        value={nombre}
        onChangeText={setNombre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10
  }
});