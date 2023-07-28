import DarkMode from "./DarkMode";
import Filter from "./Filter";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onChangeFilter }) {
  return (
    <header className={styles.header}>
      <DarkMode />
      <Filter
        filters={filters}
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
    </header>
  );
}
