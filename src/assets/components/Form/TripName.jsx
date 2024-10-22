import React, { useState } from "react";
import "./TripName.css";

const TripName = ({ onHandleDest, randomColor }) => {
  const [trip, setTrip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleDest(trip);
    setTrip("");
  };
  return (
    <>
      <section className="trip-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Destination name.."
            className="trip-name"
            value={trip}
            onChange={(e) => setTrip(e.target.value)}
          />
          <button
            style={{
              backgroundColor: randomColor().bg,
              color: randomColor().solidColor,
            }}
          >
            Add
          </button>
        </form>
      </section>
    </>
  );
};

export default TripName;
