import styles from "../../styles/menu.module.css";

function LBreakfast() {
  return (
    <div className="breakfast-menu">
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Eggs And Bacon</h1>
          <div id="item-price">3$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">French Toast</h1>
          <div id="item-price">1$</div>
        </div>
      </div>
      <div className="item">
        <div className="item-details">
          <h1 id="item-name">Waffles With Bacon</h1>
          <div id="item-price">5$</div>
        </div>
      </div>
    </div>
  );
}

export default LBreakfast;
