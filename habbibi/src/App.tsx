import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New ", "San ", "Colo", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="List Group" />
    </div>
  );
}

export default App;
