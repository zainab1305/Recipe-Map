function IngredientsList(props)
{
    const thingsElements = props.items.map(thing =><div className="elements" key={thing}> <p >{thing}</p><button onClick={() => props.onRemove(thing)} className="cross">X</button></div>)
    return (
        <>
         <section>
            <h3>Ingredients Available:</h3>
            {thingsElements}
        </section>
        {
                props.items.length >3 
                    && 
                <div className="get-recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.click}>Get a recipe</button>
                </div>
            }
            </>
    )
}
export default IngredientsList