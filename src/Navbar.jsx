const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                {/* 
                    <a href="/create" style={ {
                    color : "white",
                    backgroundColor : '#f1356d',
                    borderRadius : '5px'
                    } }>New Blog</a> 

                    using inline css in jsx
                 */}
            </div>
        </nav>
    );
}
 
export default Navbar;