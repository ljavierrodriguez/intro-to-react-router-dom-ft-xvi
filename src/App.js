import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/about";
import Contact from "./views/contact";
import Home from "./views/home";
import NotFound from "./views/NotFound";
import './styles/style.scss';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>{/* Switch = Si no existe la ruta carga el componente NotFound por defecto */}
                    <Route exact path={"/contact/category/:category/subcategory/:subcategory"} component={Contact} />
                    <Route exact path={"/contact/category/:category"} component={Contact} />
                    <Route exact path={"/contact"} component={Contact} />
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/"} component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;