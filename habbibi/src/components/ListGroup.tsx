// import { Fragment } from "react";

//pascal case - class name
function ListGroup() {
  let items = ["New ", "San ", "Colo", "Paris"];
  items = [];

  //conditional rendering but bellow is not a good practice

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>No items found</h1>
  //       </>
  //     );

  return (
    // this <> </> will tell react to use  fragment tag
    <>
      <h1>List Group</h1>
      // we can use 2nd one instead of 1st
      {items.length === 0 ? <p>no items there</p> : null}
      {items.length === 0 && <p>no items there</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
