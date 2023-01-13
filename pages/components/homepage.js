import styles from "../../styles/homepage.module.css";

const LHome = () => {
  return (
    <section className={[styles.homepage]}>
      <div className={[styles.container, styles.homepage]}>
        <div className={styles.homepage_left}>
          <h1>
            <span>MoonLight</span>
            <span>Restaurant</span>
          </h1>
          <p className={styles.u_text_small}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            ea aliquam sit nemo nisi! Nesciunt quis illum id qui et!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LHome;
