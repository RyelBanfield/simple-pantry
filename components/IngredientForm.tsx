/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  ingredients: string[] | null,
  setIngredients: (ingredients: string[]) => void
};

type FormValues = { ingredient: string };

const IngredientForm = ({ ingredients, setIngredients }: Props) => {
  const {
    register, handleSubmit, reset, formState: { isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setIngredients([...(ingredients || []), data.ingredient]);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex mb-10 max-w-lg ">
      <input {...register('ingredient', { required: true, pattern: /^[a-zA-Z1-9].*/ })} placeholder="Add ingredients to your pantry" className="flex-grow rounded p-2 mr-2 capitalize text-black" />
      <button
        type="submit"
        className="btn bg-green-400 hover:bg-green-600 text-black font-bold py-2 px-16 rounded border-0"
      >
        Add
      </button>
    </form>
  );
};

export default IngredientForm;
