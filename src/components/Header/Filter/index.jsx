import styles from "./Filter.module.css";
import classNames from "classnames";

export default function Filter({ filters, filter, onChangeFilter }) {
  const handleClick = (index) => onChangeFilter(index);

  return (
    <ul className={styles.filter}>
      {filters.map((item, index) => {
        return (
          <li key={item} className={styles.filter__item}>
            <button
              type="button"
              className={classNames(styles.filter__btn, {
                [styles.filter__selected]: item === filter,
              })}
              onClick={() => handleClick(index)}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
