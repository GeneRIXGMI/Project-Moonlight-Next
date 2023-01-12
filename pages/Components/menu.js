import styles from "../../styles/menu.module.css";
import { useState } from "react";
import LBreakfast from "./breakfast";
import LLunch from "./lunch";
import LDinner from "./dinner";
import LDrinks from "./drinks";
import LDessert from "./dessert";

const LMenu = () => {
  const [page, setPage] = useState("home");

  const ReturnPage = () => {
    switch (page) {
      case "breakfast":
        return <LBreakfast />;
      case "lunch":
        return <LLunch />;
      case "dinner":
        return <LDinner />;
      case "drinks":
        return <LDrinks />;
      case "dessert":
        return <LDessert />;
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menu_navbar}>
        <ul className={styles.menu_nav_buttons}>
          <li>
            <button
              className={styles.BTN}
              id="breakfastBTN"
              onClick={() => setPage("breakfast")}
            >
              Breakfast
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="lunchBTN"
              onClick={() => setPage("lunch")}
            >
              Lunch
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="dinnerBTN"
              onClick={() => setPage("dinner")}
            >
              Dinner
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="drinksBTN"
              onClick={() => setPage("drinks")}
            >
              Drinks
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="dessertBTN"
              onClick={() => setPage("dessert")}
            >
              Dessert
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.menu_contents}>
        <ReturnPage />
      </div>
    </div>
  );
};

export default LMenu;
