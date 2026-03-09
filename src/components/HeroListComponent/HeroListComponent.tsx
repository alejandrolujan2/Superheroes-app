import { FlatList } from "react-native";
import HeroComponent from "../HeroComponent/HeroComponent";
import { heroes } from "../../data/heroes";

export default function HeroListComponent() {
  return (
    <FlatList
      data={heroes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <HeroComponent
          hero={item}
        />
      )}
    />
  );
}