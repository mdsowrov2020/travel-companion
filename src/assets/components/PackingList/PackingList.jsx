import React from "react";
import Item from "../item/Item";
import "./PackingList.css";

const PackingList = ({ items, onRemoveItem, onToggleItem, randomColor }) => {
  return (
    <>
      <section style={{ padding: "50px 0" }}>
        {items.length === 0 ? (
          <span
            style={{
              color: randomColor().solidColor,
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Oops, you haven't added any items yet ☹️. Add and pack items for
            your next trip 😀.
          </span>
        ) : (
          <section className="packing-main">
            <div className="packing-container">
              {items &&
                items.map((item) => (
                  <Item
                    removeItem={onRemoveItem}
                    key={item.id}
                    colorTheme={randomColor()}
                    data={item}
                    onToggleItem={onToggleItem}
                  />
                ))}
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default PackingList;
