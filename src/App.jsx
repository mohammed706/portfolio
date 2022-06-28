import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/Navbar";
import Techstack from "./components/techstack/Techstack";
import Projectdetails from "./components/project/Projectdetails";
import Footer from "./components/footer/footer";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white"
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Toggle />
        <Route exact path="/">
          <Intro />
          <About />
          <Techstack />
          <ProductList />
          <Contact />
        </Route>
        <Route exact path="/project/:id">
          <Projectdetails />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
