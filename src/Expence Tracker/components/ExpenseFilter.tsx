interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <div>
      <hr />
      <select
        onChange={(event) => onSelectedCategory(event.target.value)}
        className="form-select"
        name="category"
        id="category"
      >
        <option value="">All Categories</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
        <option value="Technology">Technology</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
