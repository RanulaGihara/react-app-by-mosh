// import { Fragment } from "react";

//pascal case - class name
function ListGroup() {
  const items = ["New ", "San ", "Colo", "Paris"];

  return (
    // this <> </> will tell react to use  fragment tag
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
