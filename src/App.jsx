import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const travelData = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Nav />
      {travelData}
    </div>
  );
}
