interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface Props {
  expenses: Expense[];
  onDelete: (id?: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div>
      <table className="table table-">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button
                  onClick={() => {
                    onDelete(expense.id);
                  }}
                  className="btn btn-outline-danger"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td></td>
            <td>
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
