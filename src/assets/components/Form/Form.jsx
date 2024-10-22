import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({
  onAdditem,
  destinationValidation,
  randomColor,
  isUpdate,
  updateItem,
  onhandleUpdateItem,
}) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [updateMode, setUpdateMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    if (updateMode) {
      const editedItem = {
        description: description,
        quantity: quantity,
        id: updateItem.id,
      };

      onhandleUpdateItem(editedItem);
      setUpdateMode(false);
    } else {
      const newItem = {
        description,
        quantity,
        packed: false,
        id: Date.now(),
      };
      onAdditem(newItem);
    }

    setDescription("");
    setQuantity(1);
  };

  useEffect(() => {
    if (isUpdate && updateItem) {
      setUpdateMode(isUpdate);
      setDescription(updateItem.description);
      setQuantity(updateItem.quantity);
    }
  }, [isUpdate, updateItem]);

  return (
    <>
      <div className="add-form">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <select
              disabled={!destinationValidation}
              name=""
              id=""
              className="input-select"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
                <option value={val} key={val}>
                  {val}
                </option>
              ))}
            </select>
            <input
              type="text"
              name=""
              id=""
              className="inp"
              placeholder={
                !destinationValidation
                  ? "Add destination first.."
                  : "Add  items.."
              }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={!destinationValidation}
            />
            <button
              disabled={!destinationValidation}
              style={{
                backgroundColor: randomColor().bg,
                color: randomColor().solidColor,
              }}
            >
              {updateMode ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
