import styles from "../../styles/reservation.module.css";

function LReservation() {
  return (
    <div className={styles.reservation}>
      <form className={styles.form}>
        <div className={styles.name}>
          <label className={styles.label}>Your Name: </label>
          <input
            className={styles.input}
            type="text"
            name="yourname"
            placeholder="Jhon Doe"
          />
        </div>
        <div className={styles.people}>
          <label className={styles.label}>Number of people: </label>
          <input
            className={styles.input}
            type="number"
            id="numberPeople"
            name="numPeople"
            placeholder="4"
            min={1}
            max={15}
            required
          />
        </div>
        <div className={styles.resdate}>
          <label className={styles.label}>Date: </label>
          <input
            className={styles.input}
            type="date"
            id="resdate"
            name="whendate"
            required
          />
        </div>
        <div className={styles.restime}>
          <label className={styles.label}>Time: </label>
          <input
            className={styles.input}
            type="time"
            id="time"
            name="timeh"
            min={"9:00"}
            max={"00:00"}
            required
          />
        </div>
        <div className={styles.youremail}>
          <label className={styles.label}>Your Email: </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="resemail"
            placeholder="jhon.doe@email.com"
            required
          />
        </div>
        <div className={styles.yourphone}>
          <label className={styles.label}>Your Phone: </label>
          <input
            className={styles.input}
            type="tel"
            id="phone"
            name="resphone"
            placeholder="431-537-8459"
            required
          />
        </div>
        <button className={styles.bookbtn} type="submit">
          Book Table
        </button>
      </form>
    </div>
  );
}

export default LReservation;
