/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

type DataShape = { ingredient: string };

const IngredientForm = () => {
  const { register, handleSubmit } = useForm<DataShape>();

  const onSubmit = (data: DataShape) => console.log(data.ingredient);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mb-10 max-w-lg">
      <input {...register('ingredient', { required: true, pattern: /^[a-zA-Z1-9].*/ })} placeholder="Add ingredients to your pantry" className="flex-grow rounded p-2 mr-2" />
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
