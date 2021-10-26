// import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal'

const btnWrap = {
    position: 'relative',
    zIndex: 1,
}

const blogPost = {
    position: 'relative',
    zIndex: 2,
    padding: '10px'
}

function Home(props) {

    // state to hold blog post data
    const [newPost, setNewPost] = useState({
        name: '',
        image: '',
        desc: ''
    })

    const handleChange = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createBlog(newPost);
        setNewPost({
            name: '',
            image: '',
            desc: ''
        })
        setIsOpen(false)
        // console.log('event', event)
    }


    // load data from backend
    const loaded = () => {
        return props.blog.map((memo) => (
            <div key={memo._id} className='blog' style={blogPost}>
                <h2>{memo.name}</h2>
                <img className='pic' src={memo.image} alt={memo.name} />
                <p id='desc'>{memo.desc}</p>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    // modal popup functions
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section>
            <div className='modal' style={btnWrap}>
                <button onClick={() => setIsOpen(true)}>+ Create Post</button>
                <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                <form className='form' onSubmit={handleSubmit}>
                    <input className='b1'
                        type='text'
                        value={newPost.name}
                        name='name'
                        placeholder='name'
                        onChange={handleChange}
                        />
                        <br/>
                    <input className='b2'
                        type='text'
                        value={newPost.image}
                        name='image'
                        placeholder='image'
                        onChange={handleChange}
                        />
                        <br/>
                    <input className='b3'
                        type='text'
                        value={newPost.desc}
                        name='desc'
                        placeholder='desc'
                        onChange={handleChange}
                        />
                        <br/>
                    <input className='b4'
                    type='text'
                    value={newPost.info}
                    name='info'
                    placeholder='info'
                    onChange={handleChange}
                    />
                    <br/>
                    <input type='submit' value='Create Post' />
                </form>
                </Modal>
                </div>
                {props.blog ? loaded() : loading()}
            </section>
        </>
    )

}

export default Home;