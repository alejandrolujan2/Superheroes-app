import HeroComponent from "@/src/components/HeroComponent/HeroComponent";
import FormularioComponent from "@/src/components/FormularioComponent/FormularioComponent";
import { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import axios from "axios";

interface Hero {
  id: string;
  name: string;
  power: string;
  image: string;
}

export default function ComponenteInternoComponent() {

  const [data, setData] = useState<Hero[]>([]);
  const url = process.env.EXPO_API_HERO_URL;

  // Buscar héroe por nombre
  const searchHero = async (name: string) => {

    const cleanName = name.trim().toLowerCase();

    if (!cleanName) return;

    console.log("Buscando:", cleanName);

    try {

      const response = await axios.get(`${url}search/${cleanName}`);
      const result = response.data;

      if (result.response === "error") {
        setData([]);
        return;
      }

      const heroes: Hero[] = result.results.map((hero: any) => ({
        id: hero.id,
        name: hero.name,
        power: hero.powerstats.power,
        image: hero.image.url
      }));

      setData(heroes);

    } catch (error) {
      console.error("Error fetching heroes:", error);
    }
  };

  //  héroe inicial cuando carga la app
  useEffect(() => {

    const fetchInitialHero = async () => {

      try {

        const response = await axios.get(`${url}70`);
        const result = response.data;

        const hero: Hero = {
          id: result.id,
          name: result.name,
          power: result.powerstats.power,
          image: result.image.url
        };

        setData([hero]);

      } catch (error) {
        console.error("Error fetching hero:", error);
      }

    };

    fetchInitialHero();

  }, []);

  return (

    <View>

      <FormularioComponent onSearch={searchHero} />

      <FlatList
        data={data}
        renderItem={({ item }) => <HeroComponent hero={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No heroes found</Text>}
      />

    </View>

  );
}