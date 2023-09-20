import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { categories } from "./Categories";

const schema = z.object({
  description: z.string().min(3).max(50),
  category: z.string(),
  amount: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0.01).max(100_00)
  ),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <strong className="text-danger">{errors.description.message}</strong>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <strong className="text-danger">{errors.amount.message}</strong>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          {categories.map((categorie, index) => (
            <option key={index} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
        {errors.category && (
          <strong className="text-danger">{errors.category.message}</strong>
        )}
      </div>
      <button type="submit" className="btn btn-outline-success">
        Add Element
      </button>
    </form>
  );
};

export default ExpenseForm;
