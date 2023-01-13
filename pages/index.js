import { useState } from "react";
import LHome from "./components/homepage";
import LMenu from "./components/menu";
import LContact from "./components/contact";
import LReservation from "./components/reservation";
import styles from "../styles/navbar.module.css";

export default function Home() {
  const [page, setPage] = useState("home");

  const ReturnPage = () => {
    switch (page) {
      case "home":
        return <LHome />;
      case "menu":
        return <LMenu />;
      case "contact":
        return <LContact />;
      case "reservation":
        return <LReservation />;
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <button
            className={styles.BTN}
            id="homeBTN"
            onClick={() => setPage("home")}
          >
            <p className={styles.logo_text}>
              <span>Moon</span>light
            </p>
          </button>
        </div>
        <ul className={styles.nav_buttons}>
          <li>
            <button
              className={styles.BTN}
              id="homeBTN"
              onClick={() => setPage("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="menuBTN"
              onClick={() => setPage("menu")}
            >
              Menu
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="reservationBTN"
              onClick={() => setPage("reservation")}
            >
              Reservation
            </button>
          </li>
          <li>
            <button
              className={styles.BTN}
              id="contactBTN"
              onClick={() => setPage("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <ReturnPage />
    </>
  );
}
