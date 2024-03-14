import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const log = () => {
    console.log("hii");
  };

  return (
    <>
      <div>
        <Alert>Hello</Alert>
      </div>
      <div className="m-5">
        <Button onClick={log}>My Button</Button>
      </div>
    </>
  );
}

export default App;
