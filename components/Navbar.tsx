import AuthButton from './AuthButton';

type Props = {
  name: string;
};

const Navbar = ({ name }: Props) => (
  <nav className="flex justify-between items-center p-5">
    <h1 className="text-2xl font-bold text-green-600">
      {name}
      &apos;s Pantry
    </h1>
    <AuthButton />
  </nav>
);

export default Navbar;
