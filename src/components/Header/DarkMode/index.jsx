import { SunDim, Moon } from "@phosphor-icons/react";
import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./DarkMode.module.css";

export default function DarkMode() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button type="button" className={styles.darkMode} onClick={toggleDarkMode}>
      {darkMode ? <Moon /> : <SunDim />}
    </button>
  );
}
