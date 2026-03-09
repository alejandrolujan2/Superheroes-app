import { FlatList } from "react-native";
import HeroComponent from "../HeroComponent/HeroComponent";
import { heroes } from "../../data/Heroes";

export default function HeroListComponent() {
  return (
    <FlatList
      data={heroes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <HeroComponent
          name={item.name}
          power={item.power}
          image={item.image}
        />
      )}
    />
  );
}