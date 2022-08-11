import { TiDelete } from 'react-icons/ti';

type Props = {
  ingredients: string[] | null,
  setIngredients: (ingredients: string[]) => void
};

const IngredientList = ({ ingredients, setIngredients }: Props) => (
  !ingredients || ingredients.length === 0 ? (
    <div className="flex flex-col flex-grow justify-center items-center p-5">
      <h1 className="text-xl font-bold text-gray-800 pb-5">No ingredients in your pantry</h1>
    </div>
  ) : (
    <>
      <h2 className="font-medium text-gray-800 text-xl mb-4">Your Ingredients</h2>
      <div className="flex flex-wrap max-w-lg">
        {ingredients.map((ingredient) => (
          <div key={ingredient} className="w-1/3 max-w-xs">
            <div className="card bg-green-400 m-2">
              <div className="card-body">
                <h2 className="capitalize text-center text-black">{ingredient}</h2>
                <button
                  type="button"
                  onClick={() => setIngredients(ingredients.filter((i) => i !== ingredient))}
                  className="btn border-0 bg-transparent hover:bg-transparent"
                >
                  <TiDelete size={24} className="text-black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
);

export default IngredientList;
