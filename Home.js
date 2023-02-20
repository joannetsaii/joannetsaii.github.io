// Tutorial #10 Outputting Lists
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'alex', id: 1 },
        { title: 'My birthday present', body: 'lorem ipsum...', author: 'alex', id: 2 },
        { title: 'Graduation', body: 'lorem ipsum...', author: 'mark', id: 3 }
    ]);

    const handleDelete = (id) => {
        // Note: when refresh the page, the value is reset to its initial value (not deleted)
        // make sure it is not the blog we want to exclude
        const newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs); // update blogs with that specific blog excluded
    }

    // UseEffect basics: runs on every render
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(blogs);
    // }, []);

    // UseEffect: adding [] so that it only runs on the FIRST render
    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    }, []);

    // Outputting Lists must have key property to distinguish list item and DOM
    // ID (key) must be unique
    return (
        <div className="home">
            {/* pass in data to another file component */}
            <BlogList blogs={blogs} title="Title!"/> 

            {/* pass in filtered data */}
            <BlogList blogs={blogs.filter((blog) => blog.title === 'Graduation')} title="New Title!" handleDelete={handleDelete}/> 

            {/* { blogs.map((blog) => (
                // loop through the list, key property needed
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Content goes here { blog.author }</p>
                </div>
            ))}  */}
        </div>
    )
}

export default Home;