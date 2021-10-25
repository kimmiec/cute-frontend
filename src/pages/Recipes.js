
function Recipes (props) {

    // const id = props.match.params.id
    // const recipes = props.blog
    // const recipe = recipes.find(r => r._id === id)

    // return (
    //     <div className='recipes'>
    //         <h2>{recipe.name}</h2>
    //         <img src={recipe.image} alt={recipe.name} />
    //         <p>{recipe.info}</p>
    //     </div>
    // )
    
    const recipes = props.blog;

    const loaded = () => {
        return recipes.map((ingred) =>(
            <>
            <div key={ingred._id} className='recipe'>
                <h2>{ingred.name}</h2>
                <img src={ingred.image} alt={ingred.name} />
                <div className='card' style={{maxHeight: '100%', overflowY: 'auto'}}>
                <p>Recipe:{ingred.info}</p>
                </div>
            </div>
            </>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return recipes ? loaded() : loading()
}

export default Recipes;