import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className='header'>
            <img src='https://i.imgur.com/GPxNPJW.jpg' />
            <h1 className='title'>Cute Delights</h1>
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

export default Header;