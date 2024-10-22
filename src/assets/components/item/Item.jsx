import React from "react";
import "./Item.css";

const Item = ({ colorTheme, data, removeItem, onToggleItem }) => {
  return (
    <>
      <div className="item-container">
        <div
          className="item"
          style={{
            backgroundColor: colorTheme.bg,
            borderColor: colorTheme.borderColor,
          }}
        >
          <input
            type="checkbox"
            name="item"
            id="item"
            className="check-item"
            value={data.packed}
            onClick={() => onToggleItem(data.id)}
            style={{
              borderColor: colorTheme.solidColor,
              backgroundColor: Item.packed ? colorTheme.solidColor : "",
            }}
          />
          <p
            style={{
              color: colorTheme.solidColor,
              textDecoration: data.packed ? "line-through" : "",
              textTransform: "capitalize",
            }}
          >
            {data.quantity} {data.description}
          </p>
          <span onClick={() => removeItem(data.id)}>x</span>
        </div>
      </div>
    </>
  );
};

export default Item;
