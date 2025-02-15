import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Mumbai", "London", "Paris"];
  items = [];

  const message = items.length === 0 ? <p>No items found.</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No items found.</p> : null;
  };
  return (
    <Fragment>
      <h1>List</h1>
      {getMessage(1)}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
