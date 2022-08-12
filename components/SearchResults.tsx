import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

type Props = { query: string | null };

type ResultsType = {
  hits: [{
    recipe: {
      calories: number;
      image: string;
      ingredientLines: string[];
      ingredients: {}[];
      label: string;
      meanType: string[];
    }
  }];
};

const SearchResults = ({ query }: Props) => {
  const [results, setResults] = useState<ResultsType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);

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
      setLoading(false);
    }

    return () => setResults(null);
  }, [query]);

  useEffect(() => {
    if (results) console.log(results);
  }, [results]);

  if (loading) {
    return (
      <main className="bg-green-500 flex flex-col flex-grow justify-center items-center p-5">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      </main>
    );
  }

  return (
    !results ? (
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1 className="text-md font-bold text-gray-800 pb-5">Enter An Ingredient To Find Recipes</h1>
      </div>
    ) : (
      <div className="flex flex-col flex-grow">
        <h1 className="text-xl font-bold text-gray-800 pb-5 capitalize">
          Recipes including
          {' '}
          {query}
        </h1>
        <div className="">
          {results.hits.map(({ recipe }) => (
            <div key={recipe.label} className="bg-gray-800 rounded mb-5 w-72 h-64">
              <Image src={recipe.image} alt={recipe.label} layout="responsive" height="1080" width="1920" objectFit="cover" className="w-full rounded-t" />
              <div className="pt-4 px-2 flex justify-center items-center ">
                <h2 className="text-sm font-medium pb-5 capitalize text-gray-400">
                  {recipe.label}
                  {' '}
                  <span className="text-xs font-normal text-gray-500">
                    {recipe.calories.toFixed(0)}
                    {' '}
                    Cals
                  </span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default SearchResults;
