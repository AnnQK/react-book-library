import React from "react";
import { Link } from "react-router-dom";
import styles from "./IntroPage.module.scss";

function IntroPage() {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <span>React Book Library</span>
      </h1>
      <div>
        <h3 className={styles.subtitle}>Here you can</h3>
        <Link className={styles.link} to="browse">
          Find
        </Link>
        <Link className={styles.link} to="shop">
          Buy
        </Link>
        <Link className={styles.link} to="reading">
          Save
        </Link>
        <Link className={styles.link} to="favourite">
          Rate
        </Link>
        <h3 className={styles.subtitle}>your favourite books</h3>
      </div>
    </div>
  );
}

export default IntroPage;
