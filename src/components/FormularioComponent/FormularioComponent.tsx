import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";

interface Props {
  onSearch: (name: string) => void;
}

export default function FormularioComponent({ onSearch }: Props) {

  const [nombre, setNombre] = useState("");

  const handleSearch = () => {
    if (!nombre.trim()) return;
    onSearch(nombre);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Buscar héroe..."
        placeholderTextColor="#999"
        value={nombre}
        onChangeText={setNombre}
      />

      <Pressable style={styles.button} onPress={handleSearch}>
        <Text style={styles.icon}>Searchq</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    padding:10,
    backgroundColor:"#111"
  },

  input:{
    flex:1,
    backgroundColor:"#222",
    color:"#fff",
    padding:12,
    borderRadius:8
  },

  button:{
    marginLeft:10,
    backgroundColor:"#e62429",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:15,
    borderRadius:8
  },

  icon:{
    fontSize:18,
    color:"white"
  }

});