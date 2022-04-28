import { useState } from "react";

export default function Product(props) {
  const [isDelete, setDelete] = useState(false);

  function enDelete() {
    setIsEditMode(true);
  }
  function disDelete() {
    setDelete(false);
  }

  return (
    <div>
      {isDelete ? (
        <ModeEdit {...props} onDeleteMode={disDelete} />
      ) : (
        <ModeShow {...props} onDeleteMode={enDelete} />
      )}
    </div>
  );
}

function ModeEdit({
  id,
  name,
  description,
  tags,
  price,
  category,
  onDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <button
          onClick={() => {
            console.log("Delete product", id, name);
          }}
        >
          Abbrechen
        </button>
        <button onClick={onDeleteMode}>löschen</button>
      </div>
    </div>
  );
}
