/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import { FormValues } from '../lib/types';

type Props = { setQuery: (query: string) => void };

const SearchForm = ({ setQuery }: Props) => {
  const {
    register, handleSubmit, reset, formState: { isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => { setQuery(data.query); };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mb-10 w-full mx-auto">
      <input autoComplete="off" {...register('query', { required: true, pattern: /^[a-zA-Z1-9].*/ })} placeholder="What's In Your Pantry?" className="flex-grow rounded p-3 mb-4 capitalize text-black" />
      <motion.button
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-400 hover:bg-green-600 text-black p-3 rounded border-0"
      >
        Search For Recipes
      </motion.button>
    </form>
  );
};

export default SearchForm;
