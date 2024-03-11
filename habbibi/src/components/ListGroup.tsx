// import { Fragment } from "react";

//pascal case - class name
function ListGroup() {
  const items = ["New ", "San ", "Colo", "Paris"];

  return (
    // this <> </> will tell react to use  fragment tag
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
