import React from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { motion } from 'framer-motion';

type Props = {
  image: string;
  name: string;
};

const Header = ({ image, name }: Props) => (
  <div className="flex">
    <div className="pr-4 pb-10">
      <motion.button
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { signOut(); }}
      >
        <Image src={image} alt={name} layout="fixed" height="50" width="50" className="rounded" />
      </motion.button>
    </div>
    <div>
      <h1 className="font-bold text-md text-gray-800 capitalize">
        Hey
        {' '}
        {name.split(' ')[0]}
        !
      </h1>
      <p className="font-medium text-gray-800 capitalize">Let&apos;s find you new recipes.</p>
    </div>
  </div>
);

export default Header;
