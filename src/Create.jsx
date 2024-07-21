import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // Whenever we click submit, the page reloads.To prevent this we use this method
        setIsPending(true);
        const blog = {title, body, author};

        fetch(`http://localhost:8000/blogs`,{
            method: 'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title : </label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body : </label>
                <textarea 
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author : </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {isPending && <button disabled>Adding Blog</button>}
                {!isPending && <button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;