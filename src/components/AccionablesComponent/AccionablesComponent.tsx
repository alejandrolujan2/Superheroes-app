import { View, Button } from "react-native";

export default function AccionablesComponent() {

  const mostrarMensaje = () => {
    console.log("Botón presionado");
  };

  return (
    <View>
      <Button
        title="Presionar"
        onPress={mostrarMensaje}
      />
    </View>
  );
}