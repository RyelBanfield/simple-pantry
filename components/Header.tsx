import React from 'react';
import Image from 'next/image';

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
      <h1 className="font-bold text-2xl">
        Hey
        {' '}
        {name.split(' ')[0]}
        !
      </h1>
      <p className="font-medium">What do you have in your pantry?</p>
    </div>
  </div>
);

export default Header;
