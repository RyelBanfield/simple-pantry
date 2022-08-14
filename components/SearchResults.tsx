/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { RecipeType, ResultsType } from '../lib/types';

type Props = { query: string | null };

const SearchResults = ({ query }: Props) => {
  const [results, setResults] = useState<ResultsType | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);

  const handleModal = (recipe: RecipeType) => {
    setModalOpen(!modalOpen);
    setSelectedRecipe(recipe);
  };

  useEffect(() => {
    if (query) {
      const options = {
        method: 'GET',
        url: 'https://api.edamam.com/api/recipes/v2',
        params: {
          type: 'public',
          q: query,
          app_id: '11b4af57',
          app_key: '1c67a71cfd2c88871efbca3aebcb89de',
        },
      };

      const fetchResults = async () => {
        const { data } = await axios(options);
        setResults(data);
      };

      fetchResults();
    }

    return () => setResults(null);
  }, [query]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    !results ? (
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1 className="text-md font-bold text-gray-800 pb-5">Enter An Ingredient To Find Recipes</h1>
      </div>
    ) : (
      !modalOpen ? (
        <div className="flex flex-col flex-grow mb-10">
          <h1 className="text-xl font-bold text-gray-800 pb-6 capitalize">
            Recipes including
            {' '}
            {query}
          </h1>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {results.hits.map(({ recipe }) => (
              <motion.button
                type="button"
                key={uuidv4()}
                onClick={() => handleModal(recipe)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  variants={item}
                  className="bg-gray-800 rounded-md w-full cursor-pointer"
                >
                  <Image src={recipe.image} alt={recipe.label} layout="responsive" height="1080" width="1920" objectFit="cover" className="w-full rounded-t" />
                  <div className="pt-4 px-2 flex justify-between">
                    <h2 className="text-sm font-medium pb-5 capitalize text-gray-400">{recipe.label.split(' ').slice(0, 3).join(' ')}</h2>
                    <span className="text-xs font-normal text-gray-500">
                      {recipe.calories.toFixed(0)}
                      {' '}
                      cals
                    </span>
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div variants={item} className="bg-gray-800 rounded-md w-full flex flex-col flex-grow max-w-xs m-auto mb-10">
          <Image src={selectedRecipe.image} alt={selectedRecipe.label} layout="responsive" height="1080" width="1920" objectFit="cover" className="w-full rounded-t" />
          <div className="p-6">
            <div className="flex justify-between">
              <h2 className="text-lg font-medium pb-5 capitalize text-gray-400">{selectedRecipe.label.split(' ').slice(0, 3).join(' ')}</h2>
              <span className="text-sm font-normal text-gray-500">
                {selectedRecipe.calories.toFixed(0)}
                {' '}
                cals
              </span>
            </div>
            <div className="flex flex-col flex-grow justify-between">
              <h3 className="text-md font-medium pb-3 capitalize text-gray-400">Ingredients</h3>
              <ul className="text-sm font-normal text-gray-400">
                {selectedRecipe.ingredientLines.map((ingredient: string) => (
                  <li key={uuidv4()}>{ingredient}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => { setModalOpen(!modalOpen); }}
                className="bg-green-800 text-white py-2 px-6 rounded w-full mt-10"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )
    )
  );
};

export default SearchResults;
