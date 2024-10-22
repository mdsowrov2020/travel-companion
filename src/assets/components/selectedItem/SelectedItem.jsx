import React, { useState } from "react";
import "./SelectedItem.css";

const SelectedItem = ({ items, randomColor, onUpdateItem, onRemoveItem }) => {
  const packedItems = items.filter((item) => item.packed);
  return (
    <>
      {packedItems.length === 0 ? (
        ""
      ) : (
        <div className="select-container">
          <div className="selected-main">
            <>
              {packedItems.length === 0 ? (
                "You have not packed any item. Packed some item first"
              ) : (
                <ul className="selected-list">
                  {packedItems.map((item) => (
                    <li
                      key={item.id}
                      style={{
                        backgroundColor: randomColor().bg,
                        color: randomColor().solidColor,
                        borderColor: randomColor().solidColor,
                      }}
                    >
                      <div className="packed-items">
                        <span style={{ textTransform: "capitalize" }}>
                          {item.quantity} {item.description}
                        </span>{" "}
                        <div className="actions">
                          {" "}
                          ✅{" "}
                          <button onClick={() => onUpdateItem(item, true)}>
                            Edit 🖋️
                          </button>
                          <button onClick={() => onRemoveItem(item.id)}>
                            Remove ❌
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedItem;
