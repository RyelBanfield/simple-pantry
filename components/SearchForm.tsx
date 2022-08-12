/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = { setQuery: (query: string) => void };
type FormValues = { query: string };

const SearchForm = ({ setQuery }: Props) => {
  const {
    register, handleSubmit, reset, formState: { isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => { setQuery(data.query); };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-10 container mx-auto max-w-sm">
      <input {...register('query', { required: true, pattern: /^[a-zA-Z1-9].*/ })} placeholder="What's In Your Pantry?" className="flex-grow rounded p-3 mb-4 capitalize text-black" />
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-600 text-black p-3 rounded border-0"
      >
        Search For Recipes
      </button>
    </form>
  );
};

export default SearchForm;
