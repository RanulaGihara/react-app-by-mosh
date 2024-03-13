// import { Fragment } from "react";
import { useState } from "react"; // build in function in react to idenftify this  component has data or state that can change by time

//pascal case - class name
function ListGroup() {
  let items = ["New ", "San ", "Colo", "Paris"];
  //   //   items = [];
  //   let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   arr[0]  //variable selectedIndex
  //   arr[1]  // updater

  // here in TS we can get not only type safety also the suggestions, Also inside the return it identify the type. but here I have understand the type
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  //conditional rendering but bellow is not a good practice

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>No items found</h1>
  //       </>
  //     );

  return (
    // this <> </> will tell react to use  fragment tag

    // we can use 2nd one instead of 1st
    //  {items.length === 0 ? <p>no items there</p> : null}

    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>no items there</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => setSelectedIndex(index)}

            // onClick={}

            // onClick={handleClick}

            // onClick={() => {
            //     console.log(item, index);
            //   }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
