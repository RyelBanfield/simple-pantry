/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

type Props = {
  ingredients: string[] | null,
  setIngredients: (ingredients: string[]) => void
};

type FormValues = { ingredient: string };

const IngredientForm = ({ ingredients, setIngredients }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setIngredients([...(ingredients || []), data.ingredient]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mb-10 max-w-lg ">
      <input {...register('ingredient', { required: true, pattern: /^[a-zA-Z1-9].*/ })} placeholder="Add ingredients to your pantry" className="flex-grow rounded p-2 mr-2 capitalize" />
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-16 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default IngredientForm;
