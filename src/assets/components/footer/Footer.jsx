import React from "react";
import "./Footer.css";

const Footer = ({ items }) => {
  const totalItem = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItem) * 100);

  return (
    <footer>
      <div className="footer-container">
        <h4>
          ▶️➡️🕒{" "}
          {totalItem === 0
            ? "Oopss you have no item on list! 😟. And you"
            : ` You added total ${totalItem} items for your trip.And you`}{" "}
          {totalPacked === 0
            ? `did not packed any item `
            : `already packed total ${totalPacked}  items `}
          or {totalItem === 0 ? 0 : percentage}% of your list{" "}
          {totalPacked === 0 ? "☹️" : "😀"}.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
