import { useState } from 'react';
import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { TailSpin } from 'react-loader-spinner';

import Header from '../components/Header';
import IngredientForm from '../components/IngredientForm';
import IngredientList from '../components/IngredientList';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [ingredients, setIngredients] = useState<string[] | null>(null);

  if (status === 'loading') {
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
    !session ? (
      <main className="bg-green-500 flex flex-col flex-grow justify-center items-center p-5">
        <h1 className="text-xl font-bold text-white pb-5">Ready to simplify your pantry shopping?</h1>
        <button
          type="button"
          onClick={() => signIn('google')}
          className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-10 rounded"
        >
          Sign in with Google
        </button>
      </main>
    ) : (
      <main className="bg-gray-100 flex flex-col flex-grow p-8 align-center">
        <Header image={session.user!.image || ''} name={session.user!.name || ''} />
        <IngredientForm ingredients={ingredients} setIngredients={setIngredients} />
        <IngredientList ingredients={ingredients} setIngredients={setIngredients} />
      </main>
    )
  );
};

export default Home;
