import { Image, StyleSheet, Text, View } from "react-native";

interface HeroProps {
  name: string;
  power: string;
  image: string;
  // Aregarle dependiendo de la petición que se vaya a hacer
}

export default function HeroComponent(props: { hero: HeroProps }) {
  const heroAPI = props.hero;
  return (
    <View style={styles.card}>
      <Image source={{ uri: heroAPI.image }} style={styles.image} />

      <Text style={styles.name}>{heroAPI.name}</Text>
      <Text>{heroAPI.power}</Text>
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