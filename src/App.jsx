import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const handleChangeFilter = (index) => {
    setFilter(filters[index]);
  };
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onChangeFilter={handleChangeFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
