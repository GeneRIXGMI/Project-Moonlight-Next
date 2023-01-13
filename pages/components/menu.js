import styles from "../../styles/menu.module.css";
import { useState } from "react";

const LMenu = () => {
  const [menu, setMenu] = useState("home");

  const ReturnMenu = () => {
    switch (menu) {
      case "pizza":
        return (
          <div className={styles.items_menu}>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Prosciutto</h1>
                <div className={styles.item_price}>10$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Diavola</h1>
                <div className={styles.item_price}>12$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Moonzza</h1>
                <div className={styles.item_price}>13$</div>
              </div>
            </div>
          </div>
        );
      case "grill":
        return (
          <div className={styles.items_menu}>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Steak</h1>
                <div className={styles.item_price}>15$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Grilled Salmon</h1>
                <div className={styles.item_price}>14$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Grilled Chicken Breast</h1>
                <div className={styles.item_price}>13$</div>
              </div>
            </div>
          </div>
        );
      case "burger":
        return (
          <div className={styles.items_menu}>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Bacon Burger</h1>
                <div className={styles.item_price}>7$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>
                  Japanese Hamurger with rice
                </h1>
                <div className={styles.item_price}>12$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Cheeseburger</h1>
                <div className={styles.item_price}>5$</div>
              </div>
            </div>
          </div>
        );
      case "drinks":
        return (
          <div className={styles.items_menu}>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Coca-Cola</h1>
                <div className={styles.item_price}>1$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Lemonade</h1>
                <div className={styles.item_price}>2$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Beer</h1>
                <div className={styles.item_price}>3$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Wine</h1>
                <div className={styles.item_price}>4$</div>
              </div>
            </div>
          </div>
        );
      case "dessert":
        return (
          <div className={styles.items_menu}>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Chocolate Cake</h1>
                <div className={styles.item_price}>5$</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_details}>
                <h1 className={styles.item_name}>Parfait</h1>
                <div className={styles.item_price}>7$</div>
              </div>
            </div>
          </div>
        );
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
              onClick={() => setMenu("pizza")}
            >
              Pizza
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="lunchBTN"
              onClick={() => setMenu("grill")}
            >
              Grill
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="dinnerBTN"
              onClick={() => setMenu("burger")}
            >
              Burgers
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="drinksBTN"
              onClick={() => setMenu("drinks")}
            >
              Drinks
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="dessertBTN"
              onClick={() => setMenu("dessert")}
            >
              Dessert
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.menu_contents}>
        <div className={styles.menuHeader}>
          <h1 className={styles.item_name}>Name</h1>
          <h1 className={styles.itemPrice}>Price</h1>
        </div>
        <hr className={styles.menuSeparator} />
        <ReturnMenu />
      </div>
    </div>
  );
};

export default LMenu;
