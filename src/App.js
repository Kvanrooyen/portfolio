import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Project} path='/' exact />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={About} path='/about' />
        <Route component={Post} path='/post' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
