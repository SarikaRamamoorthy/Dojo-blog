import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path = "/">
                            <Home />
                        </Route>
                        <Route exact path = "/create">
                            <Create/>
                        </Route>
                        <Route exact path = "/blogs/:id">
                            <BlogDetails/>
                        </Route>
                        <Route path = "*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;