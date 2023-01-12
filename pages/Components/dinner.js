import styles from "../../styles/menu.module.css";

function LDinner() {
  return (
    <div className="dinner-menu">
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Steak</h1>
          <div id="item-price">10$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Japanese Hamurger with rice</h1>
          <div id="item-price">12$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Grilled Salmon</h1>
          <div id="item-price">11$</div>
        </div>
      </div>
    </div>
  );
}

export default LDinner;
