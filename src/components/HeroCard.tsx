import { Image, StyleSheet, Text, View } from "react-native";

type HeroProps = {
  hero: any;
};

export default function HeroCard({ hero }: HeroProps) {

  return (

    <View style={styles.card}>

      <Text style={styles.name}>{hero.name}</Text>

      {hero?.image?.url && (
        <Image
          source={{ uri: hero.image.url }}
          style={styles.image}
        />
      )}

      <View style={styles.info}>

        <Text style={styles.text}>
          Nombre: <Text style={styles.highlight}>{hero.biography["full-name"]}</Text>
        </Text>

        <Text style={styles.text}>
          Publisher: <Text style={styles.highlight}>{hero.biography.publisher}</Text>
        </Text>

      </View>

      <View style={styles.stats}>

        <Text style={styles.stat}>🧠 Inteligencia: {hero.powerstats.intelligence}</Text>

        <Text style={styles.stat}>💪 Fuerza: {hero.powerstats.strength}</Text>

        <Text style={styles.stat}>⚡ Velocidad: {hero.powerstats.speed}</Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  card: {
    width: "95%",
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",

    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,

    elevation: 10
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 15
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#38bdf8",
    marginBottom: 20
  },

  info: {
    alignItems: "center",
    marginBottom: 15
  },

  text: {
    color: "#e2e8f0",
    fontSize: 16,
    marginBottom: 4
  },

  highlight: {
    color: "#38bdf8",
    fontWeight: "bold"
  },

  stats: {
    marginTop: 10,
    width: "100%",
    alignItems: "center"
  },

  stat: {
    fontSize: 16,
    color: "#f1f5f9",
    marginVertical: 2
  }

});