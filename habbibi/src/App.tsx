import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const log = () => {
    console.log("hii");
  };

  return (
    <div className="m-5">
      <Button color="secondary" onClick={log}>
        My Button
      </Button>
    </div>
  );
}

export default App;
