import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  name: string;
};

const Header = ({ image, name }: Props) => (
  <div className="flex mb-5">
    <div className="pr-4 pb-10">
      <Image src={image} alt={name} layout="fixed" height="50" width="50" className="rounded" />
    </div>
    <div>
      <h1 className="font-bold text-lg text-gray-800">
        Hey
        {' '}
        {name.split(' ')[0]}
        !
      </h1>
      <p className="font-medium text-gray-800">Let&apos;s find your new recipes!</p>
    </div>
  </div>
);

export default Header;
