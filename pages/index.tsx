import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { TailSpin } from 'react-loader-spinner';

import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

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
      <>
        <Navbar name={session.user!.name!.split(' ')[0]} />
        <main className="bg-white flex flex-col flex-grow items-center p-5">
          xxx
        </main>
      </>
    )
  );
};

export default Home;
