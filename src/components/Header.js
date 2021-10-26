import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className='header'>
            <div className='wrapper'>

            <h1 className='title'>Cute Delights</h1>

            <div className='imgDiv'>
            {/* <img src='https://i.imgur.com/GPxNPJW.jpg' alt='afternoon rose tea' /> */}
            </div>

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
        </div>
    )
}

export default Header;