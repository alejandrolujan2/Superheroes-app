import { View, Text, Image, StyleSheet } from "react-native";

interface HeroProps {
  name: string;
  power: string;
  image: string;
}

export default function HeroComponent({ name, power, image }: HeroProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>
      <Text>{power}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    alignItems: "center"
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  }
});