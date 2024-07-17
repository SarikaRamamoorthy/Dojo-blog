import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
/*
    deletes only local data
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
*/

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok) throw Error('could not fetch the data for that resource')
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setError(e.message);
                setIsPending(false);
            });
    }, 1000)
},[])

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>{"Loading.."}</div>}
            {blogs && <BlogList blogs = { blogs } title = { "All Blogs" }/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Mario's blogs" /> */}
            {/* <button onClick={() => setName('prames')}>change name</button>
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;