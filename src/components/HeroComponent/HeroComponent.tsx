import { Image, StyleSheet, Text, View } from "react-native";

interface HeroProps {
  id: string;
  name: string;
  power: string;
  image: string;
}

interface Props {
  hero: HeroProps;
}

export default function HeroComponent({ hero }: Props) {

  return (
    <View style={styles.card}>

      <Image source={{ uri: hero.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{hero.name}</Text>
        <Text style={styles.power}>⚡ Power: {hero.power}</Text>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({

  card:{
    flexDirection:"row",
    backgroundColor:"#1c1c1c",
    marginHorizontal:10,
    marginVertical:6,
    borderRadius:12,
    overflow:"hidden"
  },

  image:{
    width:90,
    height:90
  },

  info:{
    padding:10,
    justifyContent:"center"
  },

  name:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  },

  power:{
    color:"#bbb",
    marginTop:4
  }

});