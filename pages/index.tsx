import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    !session ? (
      <>
        <h1 className="text-xl font-bold text-green-600">Ready to simplify your pantry shopping?</h1>
        <button
          type="button"
          onClick={() => signIn()}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Sign in
        </button>
      </>
    ) : (
      <h1 className="text-xl font-bold text-green-600">
        Welcome
        {' '}
        {session.user?.name}
      </h1>
    )
  );
};

export default Home;
