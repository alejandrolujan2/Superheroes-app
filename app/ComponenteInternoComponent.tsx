import HeroComponent from "@/src/components/HeroComponent/HeroComponent";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function ComponenteInternoComponent() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = process.env.EXPO_API_HERO_URL;
        const fetchData = async (id: any) => {
            try {
                const response = await fetch(`${url}${id}`);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData(70);
    }, []);
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <HeroComponent hero={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}