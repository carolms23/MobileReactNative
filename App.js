
import Card from "./Card";

export default function App() {
  const products = [{ title: "Beef Burguer", image: "./assets/burguer.jpg", price: "12.00" }];

  return <Card title="Beef Burguer" text="70 calorias" image="https://i.imgur.com/KinZFDx.jpg" price="12.00" />;
}
