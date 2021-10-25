import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
        <div >
                {/* <h1>Cute Delights</h1> */}
        
            <div className='nav'>
            <Link to='/'>
                <div className='home'>Home</div>
            </Link>
            <Link to='/recipes'>
                <div className='recipes'>Recipes</div>
            </Link>
            <Link to='/about'>
                <div className='abt'>About Me</div>
            </Link>
            </div>
        </div>
    )
}

export default Nav;
