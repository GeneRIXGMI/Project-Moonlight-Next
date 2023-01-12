import styles from "../../styles/menu.module.css";

function LDessert() {
  return (
    <div className="dessert-menu">
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Chocolate Cake</h1>
          <div id="item-price">5$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Parfait</h1>
          <div id="item-price">7$</div>
        </div>
      </div>
    </div>
  );
}

export default LDessert;
