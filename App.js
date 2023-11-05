<<<<<<< HEAD
import Card from "./Card";

export default function App() {
  const products = [{ title: "Beef Burguer", image: "./assets/burguer.jpg", price: "12.00" }];

  return <Card title="Beef Burguer" text="70 calorias" image="https://i.imgur.com/KinZFDx.jpg" price="12.00" />;
}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 4f53db3 (Initial commit)
