import styles from "../../styles/menu.module.css";

function LDrinks() {
  return (
    <div className="drinks-menu">
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Coca-Cola</h1>
          <div id="item-price">1$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Lemonade</h1>
          <div id="item-price">2$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Beer</h1>
          <div id="item-price">3$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Wine</h1>
          <div id="item-price">4$</div>
        </div>
      </div>
    </div>
  );
}

export default LDrinks;
