import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Ooops...</h2>
      <h3 className={styles.subtitle}>Page Not Found</h3>
      <p className={styles.text}>
        Sorry. the content you’re looking for doesn’t exist. Either it was
        removed, or you mistyped the link.
      </p>
      <Link to="/" className={styles.link}>
        <span className={styles["link-text"]}>Go Back</span>
      </Link>
    </div>
  );
}

export default Error;
