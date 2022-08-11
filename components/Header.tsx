import React from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { AiOutlineLogout } from 'react-icons/ai';

type Props = {
  image: string;
  name: string;
};

const Header = ({ image, name }: Props) => (
  <div className="flex mb-5">
    <div className="pr-5 pb-5">
      <Image src={image} alt={name} layout="fixed" height="60" width="60" className="rounded" />
    </div>
    <div>
      <h1 className="font-bold text-2xl text-gray-800">
        Hey
        {' '}
        {name.split(' ')[0]}
        !
      </h1>
      <p className="font-medium text-gray-800">What do you have in your pantry?</p>
    </div>
    <div className="flex flex-col ml-auto justify-center items-center pb-5">
      <button type="button" className="text-gray-800" onClick={() => signOut()}>
        <AiOutlineLogout size={24} />
      </button>
    </div>
  </div>
);

export default Header;
