import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New ", "San ", "Colo", "Paris"];
  const handleSelectItem = (item: string) => {
    //have written a seperate event handler
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="List Group"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
