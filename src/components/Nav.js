import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/recipes'>
                <div>Recipes</div>
            </Link>
            <Link to='/about'>
                <div>About Me</div>
            </Link>
        </div>
    )
}

export default Nav;
