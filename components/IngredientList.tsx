type Props = {
  ingredients: string[] | null,
  setIngredients: (ingredients: string[]) => void
};

const IngredientList = ({ ingredients, setIngredients }: Props) => (
  !ingredients || ingredients.length === 0 ? (
    <div className="flex flex-col flex-grow justify-center items-center p-5">
      <h1 className="text-xl font-bold text-gray-500 pb-5">No ingredients in your pantry</h1>
    </div>
  ) : (
    <>
      <h2 className="font-medium text-xl mb-4">Your Ingredients</h2>
      <div className="bg-gray-600 rounded h-72 p-5 overflow-auto max-w-lg">
        <ul className="flex flex-col flex-grow justify-between">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient} className="bg-white flex items-center justify-between mb-5 p-1 rounded">
              <span className="text-xl capitalize p-2">{ingredient}</span>
              <button
                type="button"
                onClick={() => {
                  const newIngredients = [...ingredients];
                  newIngredients.splice(index, 1);
                  setIngredients(newIngredients);
                }}
                className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-10 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
);

export default IngredientList;
