type Props = {
  query: string | null;
};

const SearchResults = ({ query }: Props) => (
  !query ? (
    <div className="flex flex-col flex-grow justify-center items-center">
      <h1 className="text-xl font-bold text-gray-800 pb-5">Enter An Ingredient To Find Recipes</h1>
    </div>
  ) : (
    <h1>
      Search results for
      {' '}
      {query}
    </h1>
  )
);

export default SearchResults;
