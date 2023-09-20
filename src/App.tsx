import { useState } from "react";
import ExpenseList from "./Expence Tracker/components/ExpenseList";
import ExpenseForm from "./Expence Tracker/components/ExpenseForm";
import ExpenseFilter from "./Expence Tracker/components/ExpenseFilter";
import { categories } from "./Expence Tracker/components/Categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenseList, setExpenseList] = useState([
    { id: 1, description: "Apple", category: "Groceries", amount: 3 },
    { id: 2, description: "Hammer", category: "Utilities", amount: 3 },
    { id: 3, description: "Computer", category: "Technology", amount: 3 },
    { id: 4, description: "Wood", category: "Utilities", amount: 3 },
  ]);

  const visibleExpenses = selectedCategory
    ? expenseList.filter((e) => e.category == selectedCategory)
    : expenseList;

  return (
    <div className="m-5">
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenseList([
              ...expenseList,
              { id: expenseList.length + 1, ...expense },
            ])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenseList(expenseList.filter((e) => e.id !== id));
        }}
      />
    </div>
  );
};

export default App;
