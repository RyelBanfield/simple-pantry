import { useState } from 'react';
import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { TailSpin } from 'react-loader-spinner';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [query, setQuery] = useState<string | null>(null);

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
        <h1 className="text-xl font-bold text-white pb-5 text-center">Ready to simplify your shopping?</h1>
        <button
          type="button"
          onClick={() => signIn('google')}
          className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-10 rounded"
        >
          Sign in with Google
        </button>
      </main>
    ) : (
      <main className="bg-gray-100 flex flex-col flex-grow pt-10 px-4 md:px-8">
        <Header image={session.user!.image || ''} name={session.user!.name || ''} />
        <SearchForm setQuery={setQuery} />
        <SearchResults query={query} />
      </main>
    )
  );
};

export default Home;
