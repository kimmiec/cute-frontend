import { useEffect, useState } from 'react' 
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'

function Main(props){
    const [blog, setBlog] = useState(null);

    const URL = 'https://delights-backend.herokuapp.com/home';

    const getBlog = async () => {
        const response = await fetch (URL);
        const data = await response.json();
        setBlog(data);
    }

    const createBlog = async (post) => {
        // request to create a blog post
        await fetch (URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(post),
            // turn ^ info into json format from js object
        })
        getBlog();
    }

    useEffect(() => getBlog(), []);


    return (
        <div className="main">
      <Switch>
        <Route exact path='/'>
          <Home blog={blog} createBlog={createBlog}/>
        </Route>
        <Route path='/recipes'>
          <Recipes />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
    );
}

export default Main;