import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import HeroCard from "../src/components/HeroCard";
import { getHero } from "../src/services/hero.service";

const TOKEN = process.env.TOKEN;

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

      <Text style={styles.title}>Buscar Superhéroe</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese ID"
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
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  }

});