import AuthButton from './AuthButton';

const Navbar = () => (
  <nav className="flex justify-between items-center p-5">
    <h1 className="text-2xl font-bold text-green-600">Simple Pantry</h1>
    <AuthButton />
  </nav>
);

export default Navbar;
