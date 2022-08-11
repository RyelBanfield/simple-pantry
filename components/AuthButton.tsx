import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
  const { data: session } = useSession();

  return (
    session ? (
      <button
        type="button"
        onClick={() => signOut()}
        className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-6 rounded"
      >
        Sign out
      </button>
    ) : (
      <button
        type="button"
        onClick={() => signIn()}
        className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-6 rounded"
      >
        Sign in
      </button>
    )
  );
};

export default AuthButton;
