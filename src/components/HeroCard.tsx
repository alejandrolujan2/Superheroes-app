import { Image, StyleSheet, Text, View } from "react-native";

type HeroProps = {
  hero: any;
};

export default function HeroCard({ hero }: HeroProps) {

  return (

    <View style={styles.card}>

      <Text style={styles.name}>{hero.name}</Text>

      <Image
        source={{ uri: hero.image.url }}
        style={styles.image}
      />

      <Text>Nombre completo: {hero.biography["full-name"]}</Text>

      <Text>Publisher: {hero.biography.publisher}</Text>

      <Text>Inteligencia: {hero.powerstats.intelligence}</Text>

      <Text>Fuerza: {hero.powerstats.strength}</Text>

      <Text>Velocidad: {hero.powerstats.speed}</Text>

    </View>

  );
}

const styles = StyleSheet.create({

  card: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  }

});