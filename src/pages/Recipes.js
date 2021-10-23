import Modal from '../components/Modal';
import {useState} from 'react';

const recipeInfo = {
    position: 'relative',
    zIndex: 1
}

const recipeBook = {
    position: 'relatve',
    zIndex: 2,
    // backgroundColor: 'lightseagreen',
    padding: '10px'
}

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
    const [isOpen, setIsOpen] = useState(false)
    
    const recipes = props.blog;

    const loaded = () => {
        return recipes.map((ingred) =>(
            <>
            <div key={ingred._id} className='recipe' style={recipeBook}>
                <h2>{ingred.name}</h2>
                <img src={ingred.image} alt={ingred.name} />
                <div style={recipeInfo}>
                <button onClick={() => setIsOpen(true)}>Noms!</button>
                <Modal open={isOpen} onClose={() =>setIsOpen(false)}>
                <p>Recipe:{ingred.info}</p>
                </Modal>
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