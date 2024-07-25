import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";

export default function App() {
  const [number, onChangeNumber] = useState(0);
  const [d6, setD6] = useState();

  const breeds = [
    {
      key: 1,
      imagen: "",
      nombre: "Luriano (a)",
      fuerza: 8,
      constitución: 8,
      inteligencia: 5,
      destreza: 8,
      alma: 5,
      carisma: 7,
    },
    {
      key: 2,
      imagen: "",
      nombre: "Kadophino",
      Fuerza: 3,
      constitución: 4,
      inteligencia: 10,
      destreza: 7,
      alma: 10,
      carisma: 5,
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const D6function = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <FlatList
        data={breeds}
        renderItem={({ item }) => <Item title={item.nombre} />}
        keyExtractor={(item) => item.key}
      />

      {/* {d6 == undefined && (
        <Text style={{ color: "white", paddingBottom: 20, fontSize: 25 }}>
          Pulsa el botón para tirar el D6
        </Text>
      )}
      {d6 != undefined && (
        <Text style={{ color: "white", paddingBottom: 20, fontSize: 25 }}>
          Dado: {d6}
        </Text>
      )}
      <Button
        title="Pulsa aquí"
        onPress={() => {
          setD6(D6function);
        }}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Estadística"
        placeholderTextColor="#fff"
        keyboardType="numeric"
      />
      <Button
        title="Pulsa aquí"
        onPress={() => {
          alert(number);
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#000",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // width: StatusBar.width / 2,
  },
  title: {
    color: "#fff",
    fontSize: 32,
  },
  input: {
    height: 50,
    width: 200,
    margin: 12,
    marginTop: 50,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
    color: "#fff",
  },
});
