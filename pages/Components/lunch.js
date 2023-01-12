import styles from "../../styles/menu.module.css";

function LLunch() {
  return (
    <div className="lunch-menu">
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Ham Sandwich</h1>
          <div id="item-price">5$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Garlic Bread</h1>
          <div id="item-price">2$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Oyakodon</h1>
          <div id="item-price">6$</div>
        </div>
      </div>
    </div>
  );
}

export default LLunch;
