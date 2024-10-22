import React, { useState } from "react";
import "./Layout.css";
import Logo from "../logo/Logo";
import Form from "../Form/Form";
import PackingList from "../PackingList/PackingList";
import SelectedItem from "../selectedItem/SelectedItem";
import Footer from "../footer/Footer";
import TripName from "../Form/TripName";

const generateRandomColorTheme = () => {
  let color = Math.random() * 356 + 1;
  return {
    bg: `hsl(${color}, 100%, 97%)`,
    solidColor: `hsl(${color}, 100%, 40%)`,
    borderColor: `hsl(${color}, 100%, 85%)`,
  };
};

const Layout = () => {
  const [dest, setDest] = useState(null);
  const [items, setItems] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateItem, setUpdateItem] = useState(null);
  const [show, setShow] = useState(false);

  const packedItems = items.filter((item) => item.packed).length;
  const addItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDest = (dest) => {
    setDest(dest);
  };

  const clearAll = () => {
    setDest(null);
    setItems([]);
  };

  const handleEdit = (item, updateMode) => {
    console.log("Editable Item ID: ", item.id);
    const editItem = {
      description: item.description,
      quantity: item.quantity,
      id: item.id,
    };

    setIsUpdate(updateMode);
    setUpdateItem(editItem);
    if (updateMode) setShow(false);
  };

  const handleUpdateItem = (val) => {
    console.log("After edit Item ID: ", val.id);
    console.log(val);
    setItems(
      items.map((item) =>
        item.id === val.id
          ? { ...item, description: val.description, quantity: val.quantity }
          : item
      )
    );
  };
  return (
    <>
      <section className="header">
        <Logo />
      </section>
      <section className="full-section">
        <section className="container">
          <section className="forms">
            <TripName
              onHandleDest={handleDest}
              randomColor={generateRandomColorTheme}
            />
            <Form
              onAdditem={addItem}
              destinationValidation={dest}
              randomColor={generateRandomColorTheme}
              isUpdate={isUpdate}
              updateItem={updateItem}
              onhandleUpdateItem={handleUpdateItem}
            />
          </section>
          <section className="status">
            <div className="status-body">
              <p>
                <span style={{ fontSize: "14px", color: "#484848" }}>
                  Destination :
                </span>{" "}
                <span
                  style={{
                    color: generateRandomColorTheme().solidColor,
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {!dest ? "Not selected" : dest}
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14px", color: "#484848" }}>
                  Total items in list :
                </span>
                <span
                  style={{
                    color: generateRandomColorTheme().solidColor,
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {" "}
                  {items.length}
                </span>
              </p>
              <p>
                <span style={{ fontSize: "14px", color: "#484848" }}>
                  Packed item: 🧳
                </span>
                <span
                  style={{
                    color: generateRandomColorTheme().solidColor,
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {" "}
                  {packedItems === 0 ? 0 : packedItems}
                </span>
              </p>
              <button
                onClick={clearAll}
                style={{
                  backgroundColor: generateRandomColorTheme().bg,
                  color: generateRandomColorTheme().solidColor,
                }}
              >
                {items.length === 0 && !dest ? "All cleared.. 😊" : "Reset all"}
              </button>
            </div>
          </section>
          <section className="list">
            <PackingList
              items={items}
              onRemoveItem={removeItem}
              onToggleItem={toggleItem}
              randomColor={generateRandomColorTheme}
            />
          </section>
          <section className="selected-list">
            <div className="modal-main">
              <p onClick={() => setShow((sh) => !sh)}>
                Click here to show packed items
              </p>
              {show ? (
                <>
                  {" "}
                  <div
                    className="overlay"
                    onClick={() => setShow((sh) => !sh)}
                  ></div>
                  <div className="modal-content">
                    {packedItems === 0 ? (
                      <h4>You have not packed any item yet ☹️</h4>
                    ) : (
                      ""
                    )}

                    <SelectedItem
                      items={items}
                      randomColor={generateRandomColorTheme}
                      onUpdateItem={handleEdit}
                      onRemoveItem={removeItem}
                    />
                    {/* <div className="modal-footer">
                      <p>Total : {packedItems}</p>
                    </div> */}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </section>
        </section>
      </section>

      <section className="footer">
        <Footer items={items} />
      </section>
    </>
  );
};

export default Layout;
