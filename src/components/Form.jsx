import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import reshe from "./reshe-removebg-preview.png"
function Form(props) {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false); // NEW

  function sub(formData) {
    const newIngredient = formData.get("items");
    setIngredients((newIngre) => [...newIngre, newIngredient]);
  }

  async function getRecipe() {
    setLoading(true); // Show loading
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false); // Hide loading
  }
  const recipeSection = React.useRef(null)
  React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }}, [recipe])
    const handleRemove = (itemToRemove) => {
         setIngredients(prevItems => prevItems.filter(item => item !== itemToRemove));
        };
        const loaderr=React.useRef(null)
        React.useEffect(() => {
          if(loading)
          {
            loaderr.current.scrollIntoView({behavior: "smooth"})
          }
        })
  return (
    <>
      <form action={sub}>
        <input
          type="text"
          name="items"
          placeholder="eg. Oregano"
          id="item"
          aria-label="Add ingredient"
        />
        <button id="sub">+ Add Ingredients</button>
      </form>

      {ingredients.length > 0 && <IngredientsList ref={recipeSection} onRemove={handleRemove} items={ingredients} click={getRecipe} />}

      {loading && (
        <div className="loader" ref={loaderr}>
           <img src={reshe} alt="Logo"></img>
           <p>Finding your perfect recipe...</p>
        </div>
      )}

      {!loading && recipe && <Recipe cook={recipe} />}
    </>
  );
}

export default Form;
