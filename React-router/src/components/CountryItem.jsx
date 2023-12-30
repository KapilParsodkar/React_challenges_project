/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ c }) {
  return (
    <li className={styles.countryItem}>
      <span>{c.emoji}</span>
      <span>{c.country}</span>
    </li>
  );
}

export default CountryItem;
