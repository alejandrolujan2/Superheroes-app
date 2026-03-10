import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import HeroCard from "../src/components/HeroCard";
import { getHero } from "../src/services/hero.service";

export default function HomeScreen() {

  const [heroId, setHeroId] = useState("");
  const [hero, setHero] = useState<any>(null);

  useEffect(() => {

    if (!heroId) return;

    const fetchHero = async () => {
      try {
        const data = await getHero(heroId);
        setHero(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHero();

  }, [heroId]);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>🦸 Hero Finder</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese ID del héroe..."
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={heroId}
        onChangeText={setHeroId}
      />

      {hero && <HeroCard hero={hero} />}

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0f172a"
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#38bdf8",
    textShadowColor: "#0284c7",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10
  },

  input: {
    width: "85%",
    backgroundColor: "#1e293b",
    borderRadius: 15,
    padding: 14,
    fontSize: 18,
    color: "white",
    borderWidth: 2,
    borderColor: "#38bdf8",
    marginBottom: 25
  }

});